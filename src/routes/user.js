import * as express from "express";
import {SaveUser} from "../services/UserService";

let router = express.Router();
router.post('/register', function(req, res){
    return SaveUser(req.body).then(user=>{
        return res.send(user)
    })
})
export default router