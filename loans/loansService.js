var loansModel = require('./loansModel');
module.exports.getDataFromDBService = () => {
    return new Promise(function checkURL(resolve, reject) {
        loansModel.find({}, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(result);
            }
        });
    });
}


 


module.exports.createloansDBService = (loansDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var loansModelData = new loansModel();
        loansModelData.loantype = loansDetails.loantype;
        loansModelData.borrowername = loansDetails.borrowername;
        loansModelData.amount = loansDetails.amount;
        loansModelData.date = loansDetails.date;
        loansModelData.description = loansDetails.description;
        loansModelData.save(function resultHandle(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
    });
}
module.exports.updateloansDBService = (id, loansDetails) => {
    console.log(loansDetails);
    return new Promise(function myFn(resolve, reject) {
        loansModel.findByIdAndUpdate(id, loansDetails, function returnData(error, result) {
            if (error) {
                reject(false);
            }
            else {
                resolve(result);
            }
        });
    });
}
module.exports.removeloansDBService = (id) => {
    return new Promise(function myFn(resolve, reject) {
        loansModel.findByIdAndDelete(id, function returnData(error, result) {
            if (error) {
                reject(false);
            }
            else {
                resolve(result);
            }
        });
    });
}
module.exports.addloansDBService = (id) => {
    return new Promise(function myFn(resolve, reject) {
        loansModel.findByIdAndGet(id, function returnData(error, result) {
            if (error) {
                reject(false);
            }
            else {
                resolve(result);
            }
        });
    });
}