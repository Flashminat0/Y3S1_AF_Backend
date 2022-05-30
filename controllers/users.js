import User from '../models/user'
import mongoose from 'mongoose'
import Group from "../models/group";

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

export const createGroup = async (req, res) => {
    const {groupName, userId} = req.body;

    const newGroup = new Group({
        name: groupName,
        members: [{
            userId: userId,
            status: 'approved'
        }],
        leaderId: userId,
    })

    await Group.create(newGroup).then((createdGroup) => {
        return res.status(200).json({
            group: createdGroup,
            message: "Group Created Successfully"
        })
    }).catch((err) => {
        return res.status(400).json({
            error: err,
            message: "Group create error"
        })
    })
}

export const searchForGroup = async (req, res) => {
    const {searchName} = req.query;

    await Group.find({
        name: {
            $regex: new RegExp(searchName, 'ig')
        }
    }).then((groupSearchResults) => {
        return res.status(200).json(groupSearchResults)
    }).catch((err) => {
        return res.status(200).json({
            error: err,
            message: "None returned with the given"
        })
    })
}

export const getAllGroups = async (req, res) => {

    await Group.find({}).limit(5)
        .then((groups) => {
            return res.status(200).json({
                message: "Successfully fetched 5 groups",
                groups: groups
            })
        })
        .catch((err) => {
            return res.status(400).json({
                err
            })
        })
}

export const getUserDataFromId = async (req, res) => {
    const {userId} = req.query;

    await User.findById(userId)
        .then((user) => {
            return res.status(200).json(user)
        }).catch((err) => {
            return res.status(400).json(err)
        })

}

export const isInAGroup = async (req, res) => {
    const {userId} = req.query;

    await Group.find({
        "members.userId": userId,
        "members.status": 'approved'
    }).then((group) => {
        return res.status(200).json({
            isInAGroup: group.length > 0,
            group: group[0]
        })
    }).catch((err) => {
        return res.status(400).json(err)
    })
}

export const requestForJoinGroup = async (req, res) => {
    const {userId, groupId} = req.body;

    await Group.findByIdAndUpdate(groupId, {
        $push: {
            members: {
                userId: userId,
                status: 'pending'
            }
        }
    }).then((group) => {
        return res.status(200).json({
            msg: "Request to group was ok",
            group: group
        })
    }).catch((err) => {
        return res.status(400).json(err)
    })
}

export const acceptToGroup = async (req, res) => {
    const {groupID, userId} = req.body

    await Group.updateOne(
        {_id: groupID, 'members.userId': userId},
        {
            $set: {
                'members.$.status': 'approved'
            }
        }
    ).then((group) => {
        return res.status(200).json({
            group
        })
    }).catch((err) => {
        return res.stale(400).json('err')
    })
}

export const rejectToGroup = async (req, res) => {
    const {groupID, userId} = req.body

    await Group.updateOne(
        {_id: groupID},
        {
            $pull: {
                'members.$.status': 'rejected'
            }
        }
    ).then((group) => {
        return res.status(200).json({
            group
        })
    }).catch((err) => {
        return res.stale(400).json('err')
    })
}