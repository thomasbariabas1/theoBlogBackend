import passport from 'passport'
import passportJwt from 'passport-jwt'
import passportLocal from 'passport-local'
import User from '../models/User'
import {hashString} from "../services/CryproService";

export default () => {
    const JwtStrategy = passportJwt.Strategy
    const ExtractJwt = passportJwt.ExtractJwt
    let opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = 'secret';

    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        User.findOne({id: jwt_payload.sub}, '-password', function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    }));

    const LocalStrategy = passportLocal.Strategy

    passport.use(new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password'
        },
        function (username, password, cb) {
            hashString(password, username).then(hashedPassword => {
                return User.findOne({username, password: hashedPassword}, '-password')
                    .then(user => {
                        if (!user) {
                            return cb(null, false, {message: 'Incorrect email or password.'});
                        }
                        return cb(null, user, {message: 'Logged In Successfully'});
                    })
                    .catch(err => cb(err));
            })
            //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
        }
    ));
}