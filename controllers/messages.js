import Messages from '../models/messages'

export const sendMessage = async (req, res) => {
    const {studentId, staffId, messages} = req.body

    await Messages.findOneAndUpdate(
        {studentId, staffId},
        {messages: [...messages]}
    ).then(async (chat) => {
        if (chat) {
            return res.status(200).json({
                message: 'Message sent successfully',
                chat,
            })
        } else {
            await Messages.create({
                studentId,
                staffId,
                messages: [...messages],
                approvedState: 'pending',
            })
                .then(async (chat) => {
                    return res.status(200).json({
                        message: 'Message sent successfully',
                        chat,
                    })
                })
                .catch((err) => {
                    return res.status(500).json({
                        message: err.message,
                    })
                })
        }
    })
}

export const fetchMessages = async (req, res) => {
    const {studentId, staffId} = req.body

    await Messages.findOne({studentId, staffId})
        .then(async (chat) => {
            if (chat) {
                return res.status(200).json({
                    message: 'Messages fetched successfully',
                    chat,
                })
            } else {
                return res.status(200).json({
                    message: 'No messages yet',
                    chat: {
                        studentId,
                        staffId,
                        messages: [],
                        approvedState: 'pending',
                    },
                })
            }
        })
        .catch((err) => {
            return res.status(500).json({
                message: err.message,
            })
        })
}

export const approveProject = async (req, res) => {
    const {studentId, staffId, role} = req.body


    await Messages.findOneAndUpdate(
        {studentId, staffId},
        {approvedState: 'approved'}
    ).then(async (chat) => {
        return res.status(200).json({
            message: 'Project approved successfully',
            chat,
        })
    }).catch((err) => {
        return res.status(500).json({
            message: err.message,
        })
    })


}

export const rejectProject = async (req, res) => {
    const {studentId, staffId, role} = req.body
    await Messages.findOneAndUpdate(
        {studentId, staffId},
        {approvedState: 'rejected'}
    ).then(async (chat) => {
        return res.status(200).json({
            message: 'Project Disapproved successfully',
            chat,
        })
    }).catch((err) => {
        return res.status(500).json({
            message: err.message,
        })
    })
}

export const retractDecision = async (req, res) => {
    const {studentId, staffId, role} = req.body
    await Messages.findOneAndUpdate(
        {studentId, staffId},
        {approvedState: 'pending'}
    ).then(async (chat) => {
        return res.status(200).json({
            message: 'Decision retracted successfully',
            chat,
        })
    }).catch((err) => {
        return res.status(500).json({
            message: err.message,
        })
    })
}
