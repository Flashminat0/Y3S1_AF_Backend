import User from '../models/user'

export const getUsers = async (req, res) => {
    try {
        const result = await User.find()
        res.json({ result })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}
