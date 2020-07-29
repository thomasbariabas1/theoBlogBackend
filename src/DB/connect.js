import mongoose  from 'mongoose'

export const connectToDb = () => {
    mongoose.connect('mongodb://13.59.230.177:27017/theoBlog', {useNewUrlParser: true});
    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
    mongoose.connection.once('open', function() {
        console.log('Connected')
    });
}

export default mongoose