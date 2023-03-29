var authservice = require('./authservice');
var getDataConntrollerfn = async (req, res) => {
    var user = await authservice.getDataFromDBService();
    res.send({ "status": true, "data": user });
}
var updateauthcontroller = async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    var result = await authservice.updateauthuserDBService(req.params.id, req.body);
    if (result) {
        res.send({ "status": true, "message": "user Updated" });
    } else {
        res.send({ "status": false, "message": "loans Updated Failed " });
    }
}
var deleteauthcontroller = async (req, res) => {
    console.log(req.params.id);
    var result = await authservice.deleteDataFromDBService(req.params.id);
    if (result) {
        res.send({ "status": true, "message": "user Deleted" });
    } else {
        res.send({ "status": false, "message": "user Deleted Failed" });
    }
}
module.exports = { deleteauthcontroller, updateauthcontroller, getDataConntrollerfn };

