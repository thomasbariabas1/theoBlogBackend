import * as express from "express";

let router = express.Router();

router.post('/authenticate', function(req, res){
    return res.send('wtf')
})

export default router