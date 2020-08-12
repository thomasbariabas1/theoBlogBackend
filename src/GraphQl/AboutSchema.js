import * as AboutService from "../services/AboutService";

const types = `
    type Person {
        firstName: String,
        lastName: String,
        profileImg: String,
        userId: String
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
      about: [Block],
      person: Person,
      active_date: String,
      active: Boolean
    }
`
const schema = `
    latestAbout: About,
`;


const lookups = {
    latestAbout: () => {
        return AboutService.GetAbout().then((about) => {
            return about
        })
    }
}

export {types, schema, lookups}