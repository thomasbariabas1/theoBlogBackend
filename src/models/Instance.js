import mongoose from '../DB/connect'

const InstanceSchema = new mongoose.Schema({
    theme: String,
    homePageImg: String,
    identifier: String,
    personId: String,
    view: Object
});

const Instance = mongoose.model('Instance', InstanceSchema);

export default Instance