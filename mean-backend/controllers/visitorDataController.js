const VisitorData = require('./../models/VisitorData');

module.exports.createVisitorData = async (req,res) => {
    try{
        let visitorData
        visitorData = new VisitorData(req.body);
        await visitorData.save()
        console.log(visitorData);
        res.send(visitorData);
    }
    catch(err){
        console.log(err);
        res.status(500).send("Wystąpił błąd",err);
    }
}

module.exports.getAllVisitorsData = async (req,res) => {
    try {
        let allVisitorsData = await VisitorData.find();
        console.log(allVisitorsData);
        res.json(allVisitorsData)

    } catch (err){
        console.log(err);
        res.status(500).send("Wystąpił błąd",err);
    }
}

module.exports.getSingleVisitorData = async () => {

}

module.exports.editSingleVisitorData = async () => {

}

module.exports.removeSingleVisitorData = async () => {

}