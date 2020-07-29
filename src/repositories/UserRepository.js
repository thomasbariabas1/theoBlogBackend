import User from '../models/User'
import {hashString} from "../services/CryproService";

export const SaveUser = (newUser) => {
    return new Promise((resolve, reject) => {
        try {
            hashString(newUser.password, newUser.username).then(hashedPassword => {

                const user = new User({...newUser, password: hashedPassword})

                user.save(function (err, dbSavedUser) {
                    if (err) return console.error(err)
                    resolve(dbSavedUser)
                });
            })
        } catch (e) {
            reject(e)
        }
    })

}