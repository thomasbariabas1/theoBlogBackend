import * as PostRepository from '../repositories/PostRepository'
import Post from "../models/Post";

export const SavePost = (person, {_id, ...rest}) => {
    if(_id) {
        return Post.updateOne({_id}, rest)
    }
    const _post = new Post({...rest, person: person, creationDate: new Date()})
    return PostRepository.SavePost(_post)
}

export const GetPostById = (postId) => {
    return PostRepository.GetPostById(postId)
}

export const GetAllPosts = (filters) => {
    return PostRepository.GetPosts(filters)
}