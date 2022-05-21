import User from "../models/user";


export const registerUser = async (req, res) => {
    const {userId, name} = req.body;

    const user = await User.findOne({userId});
    if (user) {
        return res.status(200).json({message: "User Details fetched successfully", user});
    }

    const newUser = new User({
        userId,
        name
    });

    await User.create(newUser);

    res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: newUser
    });
}
