import mongoose  from "mongoose";

const {Schema} = mongoose;


    const TopicSchema = new Schema(
        {
            name: {
                type: String,
                required: true
            }
        }
    );
    
    export default mongoose.model("Topics", TopicSchema);