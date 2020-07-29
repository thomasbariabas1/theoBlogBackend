import * as express from "express";

let router = express.Router();

router.get('/', function(req, res){
    return res.send({"test": "test"})
})

export default router