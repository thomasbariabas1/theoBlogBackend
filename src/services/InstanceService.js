import * as InstanceRepository from '../repositories/InstanceRepository'

export const saveInstance = ({_id, ...restInstance}) => {
    if(_id) {
        return InstanceRepository.updateOne(restInstance)
    }
    return InstanceRepository.saveInstance(restInstance)
}

export const getInstanceByIdentifier = (identifier) => {
    return InstanceRepository.getInstance(identifier)
}