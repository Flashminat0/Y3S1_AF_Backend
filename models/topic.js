import mongoose from 'mongoose'

const { Schema } = mongoose

const TopicSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        grpID: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Topic', TopicSchema)
