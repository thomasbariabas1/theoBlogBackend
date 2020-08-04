import mongoose from '../DB/connect'

const InstanceSchema = new mongoose.Schema({
    theme: String,
    homePageImg: String,
    identifier: String,
    personId: String
});

const Instance = mongoose.model('Instance', InstanceSchema);

export default Instance