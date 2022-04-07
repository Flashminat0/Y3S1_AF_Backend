export const herokuFunc = (req,res) => {
  const {hello} = req.body;

  res.send(`Hello ${hello}`);
}
