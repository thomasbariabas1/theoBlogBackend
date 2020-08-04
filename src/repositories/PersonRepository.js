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

export const UpdatePerson = (_id, person) => {
    console.log('person', person)
    console.log('_id', _id)
    return Person.updateOne({_id}, {...person})
}

export const GetPersonById = (personId) => {
   return Person.findOne({_id:personId})
}

export const GetPersonByUserId = (userId) => {
    return Person.findOne({userId})
}