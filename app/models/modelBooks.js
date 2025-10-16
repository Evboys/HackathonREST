require('dotenv').config()
const nano = require('nano')
const couchdbUrl = process.env.COUCHDB_URL
const nanor = nano(couchdbUrl);
const dbLivres = nanor.db.use('books');

const listeLivre = async () => {
    const query = {
        "selector" : {},
        "fields": ["auteur","date_de_sortie","editeur","titre"],
       }
    return await dbLivres.find(query);
}

const livre = async (id) => {
    const query = {
        "selector" : {"_id":id},
        "fields": ["auteur","date_de_sortie","editeur","titre"],
    }
    return await dbLivres.find(query)
}

module.exports ={listeLivre , livre}