import mongoose from "mongoose";

const {Schema} = mongoose;

const pictureSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Pictures", pictureSchema);
