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
        image: {
            type: JSON,
            required: true,
            default: {
                url: "",
                name: ""
            }
        },
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Pictures", pictureSchema);
