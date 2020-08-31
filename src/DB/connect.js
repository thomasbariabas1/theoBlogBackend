import mongoose  from 'mongoose'
const dbUsername = process.env.DB_USERNAME
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT
const databaseName = process.env.DATABASE_NAME


export const connectToDb = () => {
    mongoose.connect(`mongodb://${dbUsername}:${dbPassword}@${dbHost}:${dbPort}/${databaseName}`, {useNewUrlParser: true});
    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
    mongoose.connection.once('open', function() {
        console.log('Connected')
    });
}

export default mongoose