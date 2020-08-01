import mongoose from '../DB/connect'

const AboutSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    img: String,
    about: String,
    person: Object,
    active_date: Date,
    active: Boolean
});

const About = mongoose.model('About', AboutSchema);

export default About