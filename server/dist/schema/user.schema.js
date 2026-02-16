import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    profilePicture: {
        type: String,
        default: ''
    },
    gender: {
        type: String,
        default: ''
    },
    bio: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });
export const User = mongoose.model('User', userSchema);
//# sourceMappingURL=user.schema.js.map