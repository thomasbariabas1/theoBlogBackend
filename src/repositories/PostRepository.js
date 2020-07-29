import Post from "../models/Post";

export const SavePost = (post) => {
    return post.save(post)
}

export const GetPostById = (postId) => {
    return Post.findOne({_id: postId}).populate("person")
}

export const GetPosts = () => {
    return Post.find({}).populate("person")
}