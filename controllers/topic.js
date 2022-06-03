import Topics from '../models/topic'
import mongoose from 'mongoose'
import topic from "../models/topic";

//input topic
export const inputTopic = async (req, res) => {
    try {
        const {tags, markingScheme, projectTemplates, steps} = req.body
        const topics = new Topics({
            tags,
            markingScheme,
            projectTemplates,
            steps,
        })
        await Topics.create(topics)
            .then(() => res.json('Topic saved'))
            .catch((err) => res.status(400).json('Error:' + err))
    } catch (error) {
        res.status(500).json({message: 'Something went wrong !!', error: error})
    }
}

//retreive all topics

export const getTopic = async (req, res) => {
    try {
        const result = await Topics.find()
        return res.status(200).json(result)
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

export const getTopicData = async (req, res) => {
    const {topicTag} = req.query;

    console.log(topicTag);

    await Topics.findById(topicTag).then((topic) => {
        return res.status(200).json({topic})
    }).catch((err) => {
        return res.status(400).json(err)
    })
}

export const updateProjectTemplates = async (req, res) => {
    const {id, projectTemplates} = req.body;

    await Topics.findByIdAndUpdate(id, {
        projectTemplates: projectTemplates
    }).then((topic) => {
        return res.status(200).json({topic})
    }).catch((err) => {
        return res.status(400).json(err)
    })

}