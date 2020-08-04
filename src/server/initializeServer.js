import {connectToDb} from "../DB/connect";
import express from "express";
import cors from 'cors'
import bodyParser from 'body-parser'
import passport from 'passport'
export let app = null
export default ()=>{
    app = express()
    connectToDb()
    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.raw());
    app.use(passport.initialize());
}