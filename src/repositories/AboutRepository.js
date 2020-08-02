import About from '../models/About'

export const SaveAbout = (newAbout) => {
    return new Promise((resolve, reject) => {
        try {
            console.log('newAbout', newAbout);
            const about = new About({...newAbout})
            about.save(function (err, dbSavedAbout) {
                if (err) return About.error(err)

                resolve(dbSavedAbout)
            });
        } catch (e) {
            reject(e)
        }
    })

}

export const GetLatestActiveAbout = () => {
    return About.findOne({}, {}, { sort: { 'active_date' : -1 }}).then(about => about)
}

export const GetAboutById = (aboutId) => {
    return About.findOne({_id:aboutId})
}

export const GetAll = (page = 0, pageSize = 5) => {
   return About.paginate({}, {page, limit:pageSize})
}
