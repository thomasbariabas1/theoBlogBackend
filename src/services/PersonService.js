import * as PersonRepository from "../repositories/PersonRepository";

export const GetPersonByUserId = (userId) => {
    return PersonRepository.GetPersonByUserId(userId)
}