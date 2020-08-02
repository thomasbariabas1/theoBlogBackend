import * as AboutRepository from '../repositories/AboutRepository'
import About from "../models/About";

export const SaveAbout = ({_id, ...restAbout}, person) => {
    try {

        console.log('restAbout.active', restAbout.active)
        if (restAbout.active) {
            About.updateMany({active: true}, {"$set":{active: false}})
            restAbout.active_date = new Date()
        }
        if (_id) {
            return About.updateOne({_id}, restAbout)
        }
        return AboutRepository.SaveAbout({...restAbout, person})
    } catch (e) {
        console.log('Error saving about', e)
        throw Error('About wasnt able to be saved.')
    }
}

export const GetAbout = (aboutId) => {
    if (aboutId) {
        return AboutRepository.GetAboutById(aboutId)
    }
    return AboutRepository.GetLatestActiveAbout()
}

export const GetAbouts = (query) => {
    return AboutRepository.GetAll(query)
}