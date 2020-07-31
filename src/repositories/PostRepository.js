import Post from "../models/Post";

export const SavePost = (post) => {
    return post.save(post)
}

export const GetPostById = (postId) => {
    return Post.findOne({_id: postId}).populate("person")
}

export const GetPosts = ({page=1, pageSize=5}) => {
    return Post.paginate({}, {page, pageSize})
}