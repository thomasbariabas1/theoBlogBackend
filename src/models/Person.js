import mongoose from '../DB/connect'

const PersonSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    profileImg: String,
    userId: mongoose.Types.ObjectId,
    facebook: String,
    twitter: String,
    medium: String,
    github: String
});

const Person = mongoose.model('Person', PersonSchema);

export default Person