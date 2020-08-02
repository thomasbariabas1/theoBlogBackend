import mongoose from '../DB/connect'
import mongoosePagination from "mongoose-paginate-v2";

const AboutSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    img: String,
    about: Array,
    person: Object,
    active_date: Date,
    active: Boolean
});

AboutSchema.plugin(mongoosePagination);

const About = mongoose.model('About', AboutSchema);

export default About