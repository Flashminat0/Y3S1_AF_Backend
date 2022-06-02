import mongoose from 'mongoose'

const {Schema} = mongoose

const messagesSchema = new Schema(
    {
        studentId: {
            type: String,
            required: true,
        },
        staffUserId: {
            type: String,
            required: true,
        },
        messages: {
            type: JSON,
            required: true,
            default: [
                {
                    id: {
                        type: String,
                        required: true,
                        unique: true,
                    },
                    sender: {
                        type: String,
                        required: true,
                    },
                    message: {
                        type: String,
                        required: true,
                        trim: true,
                    },
                    type: {
                        type: String,
                        required: true,
                        enum: ['text', 'file'],
                    },
                    time: new Date().toLocaleTimeString(),
                    requestingForApproval: false,
                    approvedState: null,
                },
            ],
        },
        approvedState: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Messages', messagesSchema)
