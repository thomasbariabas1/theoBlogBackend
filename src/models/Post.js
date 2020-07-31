import mongoose from '../DB/connect'
import mongoosePagination from 'mongoose-paginate-v2'

let Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    coverText: String,
    coverImg: String,
    body: Array,
    person: Object,
    creationDate: Date,
    active: Boolean
});

PostSchema.plugin(mongoosePagination);

const Posts = mongoose.model('Posts', PostSchema);

export default Posts