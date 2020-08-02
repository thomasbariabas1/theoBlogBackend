import * as express from "express";
import * as PersonService from "../services/PersonService";
import * as AboutService from "../services/AboutService";
import passport from "passport";

let router = express.Router();

router.post('/save', passport.authenticate('jwt', { session: false }), function(req, res){
    return PersonService.GetPersonByUserId(req.user._id).then(person=>{
        AboutService.SaveAbout(req.body, person).then((about)=>{
            return res.send(about)
        })
    })
})

router.get('/latest', function(req, res) {
    return  AboutService.GetAbout().then((about) => {
            return res.send(about)
        })
})

router.get('/', function(req, res) {
    return  AboutService.GetAbouts(req.query).then((abouts) => {
        return res.send(abouts)
    })
})

router.get('/:aboutId',  function(req, res) {
    let aboutId = req.params.aboutId;
    return  AboutService.GetAbout(aboutId).then((abouts) => {
        return res.send(abouts)
    })
})

export default router