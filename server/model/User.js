import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    preference: [{ String }],
    bookmarks: [{ String }],
})

const User = mongoose.model('User', UserSchema)

export default User

// Model is Equivalent to Collection
// Schema is Document in Collection

// Model => Controller => Routes => App