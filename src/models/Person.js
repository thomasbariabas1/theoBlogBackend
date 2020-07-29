import mongoose from '../DB/connect'

const PersonSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    profileImg: String,
    userId: mongoose.Types.ObjectId
});

PersonSchema.index({ _id: 1 });

const Person = mongoose.model('Person', PersonSchema);

export default Person