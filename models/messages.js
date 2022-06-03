import mongoose from 'mongoose'

const {Schema} = mongoose

const messagesSchema = new Schema(
    {
        studentId: {
            type: String,
            required: true,
        },
        staffId: {
            type: String,
            required: true,
        },
        messages: {
            type: JSON,
            required: true,
            default: [],
        },
        approvedState: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            required: true,
            default: 'pending',
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Messages', messagesSchema)
