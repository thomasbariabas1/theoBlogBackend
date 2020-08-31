import * as InstanceRepository from '../repositories/InstanceRepository'
import * as PersonService from "./PersonService";

export const saveInstance = ({_id, ...restInstance}) => {
    if(_id) {
        return InstanceRepository.updateOne(restInstance)
    }
    return InstanceRepository.saveInstance(restInstance)
}

export const getInstanceByIdentifier = (identifier) => {
    console.log('identifier', identifier)
    return InstanceRepository.getInstance(identifier)
}

export const getInstance = (identifier) => {
    return getInstanceByIdentifier(identifier).then(instance=>{
        console.log('instance', instance)
        return PersonService.GetPersonById(instance.personId).then(person=>{
            console.log('person', person)

            const instanceObj = instance.toObject()
            const personObj = person.toObject()
            return ({...instanceObj, ...personObj})
        })
    })
}