const mongoose = require('mongoose')

const data = new mongoose.Schema({
    client_name:String,
    client_email:String,
    client_phone:String,
    client_Company:String,
    service:String,
    additional_Requirement:String
})

module.exports = mongoose.model.queary || mongoose.model('Queary',data)