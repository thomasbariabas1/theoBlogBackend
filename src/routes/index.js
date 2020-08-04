import {app} from '../server/initializeServer'
import personRoute from './person'
import postsRoute from './posts'
import authRoute from './auth'
import aboutUsRoute from './aboutUs'
import userRoute from './user'
import contactRoute from './contact'
import instanceRoute from './instance'

export default ()=>{
    app.use('/person', personRoute)
    app.use('/posts', postsRoute)
    app.use('/auth', authRoute)
    app.use('/about', aboutUsRoute)
    app.use('/user', userRoute)
    app.use('/contact', contactRoute)
    app.use('/instance', instanceRoute)
}