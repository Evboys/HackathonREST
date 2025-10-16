const modelBooks = require("../models/modelBooks")

const liste = async(req, res) => {
    const listeLivre = await modelBooks.listeLivre()
    res.json(listeLivre.docs)
}
const livre = async(req,res) => {
    const id = req.params.id
    const livre = await modelBooks.livre(id)
    res.json(livre.docs)
}
module.exports = { liste , livre };