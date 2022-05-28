import mongoose from 'mongoose'

const {Schema} = mongoose

const TopicSchema = new Schema(
    {
        tags: {
            type: JSON,
            required: true,
        },
        markingScheme: {
            type: [{
                name: {
                    type: String,
                    required: true,
                },
                url: {
                    type: String,
                    required: true,
                }
            }],
            default: [],
            required: false,
        },
        projectTemplates: {
            type: [{
                name: {
                    type: String,
                    required: true,
                },
                url: {
                    type: String,
                    required: true,
                }

            }],
            default: [],
            required: false,
        },
        steps: {
            type: Number,
            default: 1,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)


export default mongoose.model('Topic', TopicSchema)
