import mongoose from 'mongoose'

const {Schema} = mongoose

const groupSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        members: {
            type: [
                {
                    userId: {
                        type: String,
                        required: true,
                    },
                    status: {
                        type: String,
                        required: true,
                        default: 'pending',
                        enum: ['pending', 'approved', 'rejected'],
                    },
                },
            ],
            required: false,
        },
        leaderId: {
            type: String,
            required: true,
        },
        pickedTopicId: {
            type: String,
            required: false,
            default: null,
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Groups', groupSchema)
