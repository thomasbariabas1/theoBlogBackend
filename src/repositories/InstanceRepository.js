import Instance from '../models/Instance'

export const saveInstance = (instance) => {

    const newInstance = new Instance({...instance})
    return newInstance.save()
}

export const getInstance = (identifier) => {
    return Instance.findOne({identifier})
}

export const updateOne = (instance) => {

    return Instance.updateOne({identifier: instance.identifier}, {...instance})
}