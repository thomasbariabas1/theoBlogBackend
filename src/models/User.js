import mongoose from '../DB/connect'

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

UserSchema.index({ username: 1 });

const User = mongoose.model('User', UserSchema);

export default User