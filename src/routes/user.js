import * as express from "express";
import {SaveUser} from "../services/UserService";

let router = express.Router();
router.post('/register', function(req, res){
    return res.send(SaveUser(req.body))
})
export default router