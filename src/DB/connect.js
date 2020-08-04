import mongoose  from 'mongoose'

export const connectToDb = () => {
    mongoose.connect('mongodb://mondbUser:mongoDbpwd12345@18.189.32.129:27017/theoBlog', {useNewUrlParser: true});
    // mongoose.connect('mongodb://localhost:27017/theoBlog', {useNewUrlParser: true});
    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
    mongoose.connection.once('open', function() {
        console.log('Connected')
    });
}

export default mongoose