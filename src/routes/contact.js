import * as express from "express";
import * as  EmailService from '../services/EmailService'

let router = express.Router();

router.post('/sendEmail', function(req, res){
    EmailService.sendEmail(req.body).then(()=>{
        return res.send('Email send')
    })
})

export default router