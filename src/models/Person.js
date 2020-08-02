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

PersonSchema.index({ _id: 1 });

const Person = mongoose.model('Person', PersonSchema);

export default Person