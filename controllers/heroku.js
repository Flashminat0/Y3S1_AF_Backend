export const herokuFunc = (req, res) => {
    const {hello} = req.body

    res.send(`Hello ${hello}`)
}

export const helloTest = (req, res) => {
    res.send(`Hello this is a test`)
}
