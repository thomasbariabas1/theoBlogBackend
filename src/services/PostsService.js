import * as PostRepository from '../repositories/PostRepository'
import Post from "../models/Post";

export const SavePost = (person, post) => {
    const _post = new Post({...post, person: person, creationDate: new Date()})
    return PostRepository.SavePost(_post)
}

export const GetPostById = (postId) => {
    return PostRepository.GetPostById(postId)
}

export const GetAllPosts = (filters) => {
    return PostRepository.GetPosts(filters)
}