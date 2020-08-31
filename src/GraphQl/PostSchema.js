import * as PostsService from "../services/PostsService";

const types = ` 
    type Post {
    _id: String,
    title: String,
    coverText: String,
    coverImg: String,
    body: [Block],
    person: Person,
    creationDate: String,
    active: Boolean
    }
    
    type PaginatedPosts {
        docs: [Post],
        hasNextPage: Boolean
hasPrevPage: Boolean
limit: Int
nextPage: Int
page: Int
pagingCounter: Int
prevPage: Int
totalDocs: Int
totalPages: Int
    }
       
`
const query = `
    getPostById(identifier: String): Post,
    getPosts(page: String, pageSize:String): PaginatedPosts,
`;

const mutation = `
    saveInstance(instance: InstanceInput): Instance
`

const lookups = {
    getPostById: ({identifier}) => {
        return PostsService.GetPostById(identifier).then((post) => {
            console.log('post', post.person)
            return post
        })
    },
    getPosts: ({page, pageSize})=>{
        return PostsService.GetAllPosts({page, pageSize}).then((posts) => {
            console.log('posts',posts)
            return posts
        })
    }

}

export {types, query, lookups, mutation}