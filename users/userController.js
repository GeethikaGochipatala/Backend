

var userService = require('./userService');

var createuserControllerFn = async (req, res) => 
{
    try{
        console.log(req.body);

    var status = await userService.createuserDBService(req.body);
    console.log(status);

    if (status) {
        res.send({ "status": true, "message": "user created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
catch(err)
{
    console.log(err);
}
}




 
var loginuserControllerFn = async (req, res) => {
    var result = null;
    try {
        result = await userService.loginuserDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
 
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}









var getDataConntrollerfn = async (req, res) =>
{
    var user = await userService.getDataFromDBService();
    res.send({ "status": true, "data": user });
}
 

var updateuserController = async (req, res) => 
{
    console.log(req.params.id);
    console.log(req.body);
     
    var result = await userService.updateuserDBService(req.params.id,req.body);

     if (result) {
        res.send({ "status": true, "message": "user Updated"} );
     } else {
         res.send({ "status": false, "message": "loans Updated Failed " });
     }
}

var deleteuserController = async (req, res) => 
{
     console.log(req.params.id);
     var result = await userService.deleteuserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "user Deleted"} );
     } else {
         res.send({ "status": false, "message": "user Deleted Failed" });
     }
}










 
module.exports = { createuserControllerFn,loginuserControllerFn,deleteuserController,updateuserController,getDataConntrollerfn };
 
 