import * as InstanceService from "../services/InstanceService";

const types = ` 
    type MenuView {
      name: String,
     active: Boolean
    }
    
    type InstanceView {
        menu: [MenuView]
    }
    
    type Instance {
      theme: String,
      homePageImg: String,
      identifier: String,
       firstName: String,
      lastName: String,
      profileImg: String,
      view: InstanceView
    }
    
    input MenuViewInput {
     name: String,
     active: Boolean
    }
    
    input InstanceViewInput {
     menu: [MenuViewInput]
    }
    
    input InstanceInput {
      theme: String,
      homePageImg: String,
      identifier: String,
      firstName: String,
      lastName: String,
      view: InstanceViewInput
    }
`
const query = `
    getInstanceByIdentifier(identifier: String): Instance
`;

const mutation = `
    saveInstance(instance: InstanceInput): Instance
`

const lookups = {
    getInstanceByIdentifier: ({identifier}) => {
        return InstanceService.getInstance(identifier).then((instance) => {
            return instance
        })
    },
    saveInstance: ({instance}) => {
        return InstanceService.saveInstance(instance).then((instance) => {
            return instance
        })
    }
}

export {types, query, lookups, mutation}