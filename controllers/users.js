import User from '../models/user'
import mongoose from 'mongoose'

export const getUsers = async (req, res) => {
    try {
        const result = await User.find()
        res.json({result})
    } catch (error) {
        res.status(500).json({message: 'Something went wrong'})
    }
}

export const removeUser = async (req, res) => {
    const {id} = req.body
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('No User found with this ID' + id)
    await User.findByIdAndRemove(id)
    res.json({message: 'User deleted Successfully '})
}
