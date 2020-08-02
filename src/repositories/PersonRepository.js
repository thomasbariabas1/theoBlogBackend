import Person from '../models/Person'

export const SavePerson = (newPerson, userId) => {
    return new Promise((resolve, reject) => {
        try {
            const person = new Person({...newPerson, userId})
            person.save(function (err, dbSavedPerson) {
                if (err) return console.error(err)

                resolve(dbSavedPerson)
            });
        } catch (e) {
            reject(e)
        }
    })

}

export const GetPersonById = (personId) => {
   return Person.findOne({id:personId})
}

export const GetPersonByUserId = (userId) => {
    return Person.findOne({userId})
}