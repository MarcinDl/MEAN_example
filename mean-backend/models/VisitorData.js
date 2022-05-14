const mongoose = require('mongoose');

const VisitorDataSchema = mongoose.Schema({
    visitorName: {
        type: String,
        required:true
    },
    visitorFamilyName: {
        type: String,
        required:true
    },
    visitorDate: {
        type: String,
        required:true
    },
    visitorHours: {
        type: String,
        required:true
    },
    visitorCreationDate: {
        type: Date,
        default: new Date()
    },
    visitorInstitution: {
        type: String,
        required:true
    },
    visitorComment: {
        type: String
    }

});

module.exports = mongoose.model("Products",VisitorDataSchema)