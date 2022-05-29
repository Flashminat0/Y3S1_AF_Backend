import topic from '../models/submittedTopic'
import Topics from '../models/submittedTopic'
import mongoose from 'mongoose'

//input topic
export const inputTopic = async (req, res) => {
    try {
        const {name, grpID} = req.body
        const topicList = new Topics({
            name,
            grpID,
        })

        console.log(topicList)

        await Topics.create(topicList)
            .then(() => res.json('Topic saved'))
            .catch((err) => res.status(400).json('Error:' + error))
    } catch (error) {
        res.status(500).json({message: 'Something went wrong', error: error})
    }
}

//retreive all topics

export const getTopic = async (req, res) => {
    try {
        const result = await topic.find()
        res.json(result)
    } catch (error) {
        res.status(500).json({message: 'Something went wrong'})
    }
}

export const deleteTopic = async (req, res) => {
    const {id} = req.body
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('No topic with this ID' + id)
    await Topics.findByIdAndRemove(id)
    res.json({message: 'Topic deleted Successfully '})
}
