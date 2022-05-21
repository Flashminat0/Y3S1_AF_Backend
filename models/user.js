import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        },
        steamToken: {
            type: String,
            required: true
        },
        image: {
            type: JSON,
            required: true,
            default: {
                url: "https://firebasestorage.googleapis.com/v0/b/y3s1-sliit-af.appspot.com/o/default_profile_pic.png?alt=media&token=7b319ccf-5b3a-4ec4-8161-20399b7d7f3c",
                name: "default_profile_pic.png"
            }
        },
    },
    {
        timestamps: true
    }
);

export default mongoose.model("User", userSchema);
