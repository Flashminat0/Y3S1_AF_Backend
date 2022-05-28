import mongoose from 'mongoose'

const {Schema} = mongoose

const groupSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        members: {
            type: JSON,
        },
        leaderId: {
            type: String,
            required: true,
        },
        pickedTopicId: {
            type: String,
            required: false,
            default: null,
        }
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Groups', groupSchema)
