import * as express from "express";
import passport from "passport";
import * as PersonService from "../services/PersonService";

let router = express.Router();

router.get('/',  passport.authenticate('jwt', { session: false }), function(req, res){
    PersonService.GetPersonByUserId(req.user._id).then(person=>{
        return res.send(person)
    })
})

export default router