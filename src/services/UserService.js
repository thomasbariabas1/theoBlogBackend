import * as UserRepository from '../repositories/UserRepository'
import * as PersonRepository from '../repositories/PersonRepository'
import Person from "../models/Person";

export const SaveUser = ({_id, ...rest}) => {
    try {

        if(_id) {
            return UserRepository.updateUser(_id, rest).then((savedUser)=>{
                console.log('savedUser',savedUser)
                return Person.updateOne({userId: savedUser._id},{...savedUser})
            })
        }
        console.log('rest',rest)

        return UserRepository.SaveUser(rest).then(savedUser=>{
            return PersonRepository.SavePerson(rest, savedUser._id).then(savedPerson=> savedPerson)
        })
    } catch (e) {
        console.log('Error saving user', e)
        throw Error('User wasnt able to be saved.')
    }
}