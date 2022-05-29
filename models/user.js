import mongoose from 'mongoose'

const {Schema} = mongoose

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: JSON,
            required: true,
            default: {
                url: 'https://firebasestorage.googleapis.com/v0/b/y3s1-sliit-af.appspot.com/o/default_profile_pic.png?alt=media&token=7b319ccf-5b3a-4ec4-8161-20399b7d7f3c',
                name: 'default_profile_pic.png',
            },
        },
        role: {
            type: String,
            required: true,
            default: 'student',
            enum: ['student', 'co-supervisor', 'supervisor', 'admin'],
        },
        tags: {
            type: JSON,
            required: false,
            default: [],
        },
        groupId: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('User', userSchema)
