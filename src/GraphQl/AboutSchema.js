import * as AboutService from "../services/AboutService";

const types = `
    type Person {
        firstName: String,
        lastName: String,
        profileImg: String,
        userId: String,
        facebook: String,
        twitter: String,
        medium: String,
        github: String
    }
    
    type BlockData {
        code: String,
        text: String,
        caption: String,
        alignment: String
    }
    
    type Block {
        type: String,
        data: BlockData
    }
    
    type About {
      _id: String,
      about: [Block],
      person: Person,
      active_date: String,
      active: Boolean
    }
    
    type PaginatedAbouts {
        docs: [About],
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
const schema = `
    latestAbout: About,
    getAbouts(page: String, pageSize:String): PaginatedAbouts,
    getAboutById(identifier: String): About
    getActiveAbout: About
`;


const lookups = {
    latestAbout: () => {
        return AboutService.GetAbout().then((about) => {
            return about
        })
    },
    getAbouts: ({page, pageSize})=>{
        return AboutService.GetAbouts({page, pageSize}).then((about) => {
            return about
        })
    },
    getAboutById: ({identifier})=>{
        return AboutService.GetAbout(identifier).then((about) => {
            return about
        })
    },
    getActiveAbout: ()=>{
        return AboutService.GetActiveAbout().then((about) => {
            return about
        })
    }
}

export {types, schema, lookups}