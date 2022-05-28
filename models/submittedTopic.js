import mongoose from 'mongoose'

const {Schema} = mongoose

const submittedTopicSchema = new Schema(
    {
        name: {
            type: String,
            required: false,
        },
        groupId: {
            type: String,
            required: true,
        },
        leaderUserId: {
            type: String,
            required: true,
        },
        topicId: {
            type: String,
            required: true,
        },
        ChoseSupervisorId: {
            type: String,
            required: false,
        },
        SupervisorIDs: {
            type: [{
                id: {
                    type: String,
                    required: true,
                },
                status: {
                    type: String,
                    required: true,
                    default: 'pending',
                }
            }],
            required: false,
        },
        ChoseCoSupervisorId: {
            type: String,
            required: false,
        },
        CoSupervisorIDs: {
            type: [{
                id: {
                    type: String,
                    required: true,
                },
                status: {
                    type: String,
                    required: true,
                    default: 'pending',
                }
            }],
            required: false,
        },
        panelMembers: {
            type: JSON,
            required: false,
        }
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('SubmittedTopic', submittedTopicSchema)
