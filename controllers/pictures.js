import Pictures from '../models/pictures';

export const savePictureOnDB = async (req, res) => {
    try {
        const {name, description, url} = req.body;
        const picture = new Pictures({
            name,
            description,
            url
        });
        await Pictures.create(picture)
            .then(() => res.json('Picture saved'))
            .catch(err => res.status(400).json('Error: ' + err));
    } catch (e) {
        res.status(500).json({message: 'Something went wrong'});
    }
}
