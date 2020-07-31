import * as express from "express";
import passport from "passport";
import * as PostsService from '../services/PostsService'
import * as PersonService from '../services/PersonService'

let router = express.Router();
router.get('/', function(req, res){
    return PostsService.GetAllPosts(req.query).then(posts=>{
        return res.send(posts)
    })
})

router.post('/save', passport.authenticate('jwt', { session: false }), function(req, res){
    return PersonService.GetPersonByUserId(req.user._id).then(person=>{
        return PostsService.SavePost(person, req.body).then((post)=>{
            return res.send(post)
        })
    })
})

router.get('/:postId', function(req, res){
    let postId = req.params.postId;
    return PostsService.GetPostById(postId).then(post=>{
        return res.send(post)
    })
})

export default router