import Topics  from '../models/topic';

export const inputTopic =async(req,res)=>{
    try {
        const {topic} = req.body;
        const topicList = new Topics({
            topic
        });
        await Topics.create(topicList)
        .then(()=>res.json('Topic saved'))
        .catch(err => res.status(400).json('Error:' + error));

    } catch (error) {
        res.status(500).json({message: 'Something went wrong'});
    }
}

export const getTopic = (req, res) => {
    try {
        const {TopicId} = req.query;
        Topics.findById(TopicId)
            .then(topicList => res.status(200).json(topicList))
            .catch(err => res.status(400).json('Error: ' + err));

    } catch (e) {
        res.status(500).json({message: 'Something went wrong'});
    }
}