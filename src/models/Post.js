import mongoose from '../DB/connect'

let Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    coverText: String,
    coverImg: String,
    body: String,
    person: {
        type: Schema.Types.ObjectId,
        ref: "Person"
    },
    creationDate: Date,
    active: Boolean
});

PostSchema.index({ _id: 1 });

const Posts = mongoose.model('Posts', PostSchema);

export default Posts