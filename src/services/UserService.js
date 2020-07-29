import * as UserRepository from '../repositories/UserRepository'
import * as PersonRepository from '../repositories/PersonRepository'

export const SaveUser = (user) => {
    try {
        return UserRepository.SaveUser(user).then(savedUser=>{
            return PersonRepository.SavePerson(user, savedUser._id).then(savedPerson=> savedPerson)
        })
    } catch (e) {
        console.log('Error saving user', e)
        throw Error('User wasnt able to be saved.')
    }
}