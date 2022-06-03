import mongoose from 'mongoose'

const {Schema} = mongoose

const messagesSchema = new Schema(
    {
        senderId: {
            type: String,
            required: true,
        },
        receiverId: {
            type: String,
            required: true,
        },
        messages: {
            type: [{
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
                sentTime: {
                    type: Date,
                    required: true,
                    default: Date.now,
                },
                requestingForApproval: {
                    type: Boolean,
                    required: true,
                    default: false,
                },
                approvedState: {
                    type: Boolean,
                    required: true,
                    enum: [null, true, false],
                    default: null,
                },
            }],
            required: true,
            default: [],
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
