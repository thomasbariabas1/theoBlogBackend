import * as AboutRepository from '../repositories/AboutRepository'

export const SaveAbout = (about, {profileImg, ...rest}) => {
    try {
        if(!about.img) {
            about.img = profileImg
        }

        if(about.active) {
            about.active_date = new Date()
        }

        return AboutRepository.SaveAbout({...about, person: rest})
    } catch (e) {
        console.log('Error saving about', e)
        throw Error('About wasnt able to be saved.')
    }
}

export const GetAbout = () => {
        return AboutRepository.GetLatestActiveAbout()
}