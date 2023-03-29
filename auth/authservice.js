var authuser = require('./authuser');
var key = "trytrytrytrytry876543";
var encryptor = require('simple-encryptor')(key);
module.exports.getDataFromDBService = () => {
    return new Promise(function checkURL(resolve, reject) {
        authuser.find({}, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(result);
            }
        });
    });
}
module.exports.updateauthuserDBService = (id, userDetails) => {
    console.log(userDetails);
    return new Promise(function myFn(resolve, reject) {
        authuser.findByIdAndUpdate(id, userDetails, function returnData(error, result) {
            if (error) {
                reject(false);
            }
            else {
                resolve(result);
            }
        });
    });
}
module.exports.deleteDataFromDBService = (id) => {
    return new Promise(function myFn(resolve, reject) {
        authuser.findByIdAndDelete(id, function returnData(error, result) {
            if (error) {
                reject(false);
            }
            else {
                resolve(result);
            }
        });
    });
}