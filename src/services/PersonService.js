import * as PersonRepository from "../repositories/PersonRepository";

export const GetPersonByUserId = (userId) => {
    return PersonRepository.GetPersonByUserId(userId)
}

export const GetPersonById = (personId) => {
    return PersonRepository.GetPersonById(personId)
}

export const SavePerson = ({_id, ...rest}, userId) => {

    if(_id) {
       return PersonRepository.UpdatePerson(_id, rest)
    }
    return PersonRepository.SavePerson(rest, userId)
}