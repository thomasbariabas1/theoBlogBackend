import {connectToDb} from "../DB/connect";
import express from "express";
import cors from 'cors'
import bodyParser from 'body-parser'
import passport from 'passport'
export let app = null
export default ()=>{
    app.use(cors())
    app = express()
    connectToDb()
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(bodyParser.raw());
    app.use(passport.initialize());
    app.use(cors())
}