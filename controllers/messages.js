import Messages from "../models/messages";

export const sendMessage = async (req, res) => {
    const {senderId, receiverId, message} = req.body

    //
    // await Messages.findOneAndUpdate({
    //     senderId, receiverId,
    // }, {
    //     $push: {
    //         messages: {
    //             message,
    //         }
    //     }
    // })

    return res.statusCode(200).json({
        senderId, receiverId, message, approvedState: 'pending',
    })

}
