import express from 'express'
import Init, {app} from './initializeServer'
import InitRoutes from '../routes'
import InitializePassport from './initializePassport'


Init()
InitRoutes()
InitializePassport()

const DIST_DIR = __dirname
app.use(express.static(DIST_DIR))


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})