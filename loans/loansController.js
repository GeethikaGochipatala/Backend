var loansService = require('./loansService');
var getDataConntrollerfn = async (req, res) => {
    var loans = await loansService.getDataFromDBService();
    res.send({ "status": true, "data": loans });
}

var createloansControllerFn = async (req, res) => {
    var status = await loansService.createloansDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "loans created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating loans" });
    }
}
var updateloansController = async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    var result = await loansService.updateloansDBService(req.params.id, req.body);
    if (result) {
        res.send({ "status": true, "message": "loans Update" });
    } else {
        res.send({ "status": false, "message": "loans Updated Failed " });
    }
}
var addloansControllerfn = async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    var result = await loansService.addloansDBService(req.params.id, req.body);
    if (result) {
        res.send({ "status": true, "message": "loans Update" });
    } else {
        res.send({ "status": false, "message": "loans Updated Failed " });
    }
}
var deleteloansController = async (req, res) => {
    console.log(req.params.id);
    var result = await loansService.removeloansDBService(req.params.id);
    if (result) {
        res.send({ "status": true, "message": "loans Deleted" });
    } else {
        res.send({ "status": false, "message": "loans Deleted Failed" });
    }
}

module.exports = { addloansControllerfn, getDataConntrollerfn, createloansControllerFn, updateloansController, deleteloansController };

