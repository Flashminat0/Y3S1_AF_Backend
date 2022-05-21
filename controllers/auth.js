import User from "../models/user";
import {StreamChat} from 'stream-chat';


export const registerUser = async (req, res) => {
    const {userId, name} = req.body;

    const user = await User.findOne({userId});
    if (user) {
        return res.status(200).json({message: "User Details fetched successfully", user});
    }

    // Define values.
    const api_key = process.env.STREAM_API_KEY
    const api_secret = process.env.STREAM_API_SECRET


    // Initialize a Server Client
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    // Create User Token
    const token = serverClient.createToken(userId);

    const newUser = new User({
        userId,
        name,
        steamToken: token
    });

    await User.create(newUser);

    res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: newUser
    });
}
