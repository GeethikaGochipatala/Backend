
var userModel = require('./userModel');
var key="trytrytrytrytry876543";
var encryptor=require('simple-encryptor') (key);

 

 module.exports.createuserDBService = (userDetails) => {


    return new Promise(function myFn(resolve, reject) {
 
        var userModelData = new userModel();
 
        userModelData.FirstName = userDetails.FirstName;
        userModelData.LastName = userDetails.LastName;
        userModelData.Email = userDetails.Email;
        userModelData.Password = userDetails.Password;
        userModelData.PhoneNumber = userDetails.PhoneNumber;

         var encrypted =encryptor.encrypt(userDetails.Password);
         userModelData.Password=encrypted;


        userModelData.save(function resultHandle(error, result) {
 
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    });
 
 }

  



 module.exports.loginuserDBService = (userDetails)=> 
{
   return new Promise(function myFn(resolve, reject) 
   {
      userModel.findOne({ Email: userDetails.Email},function getresult(errorvalue, result)
      {
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild Data"});
         }
         else
         {
            if(result !=undefined &&  result !=null)
            {
               var decrypted = encryptor.decrypt(result.Password);

               if(decrypted== userDetails.Password)
               {
                  resolve({status: true,msg: "user Validated Successfully"});
               }
               else
               {
                  reject({status: false,msg: "user Validated failed"});
               }
            }
            else
            {
               reject({status: false,msg: "user Error Details"});
            }

         }
      
      });
      
   });
}








module.exports.getDataFromDBService = () => {

   return new Promise(function checkURL(resolve, reject) {

       userModel.find({}, function returnData(error, result) {

           if (error) {
               reject(false);
           } else {
        
               resolve(result);
           }
       });

   });

}

module.exports.updateuserDBService = (id,userDetails) => {     
   console.log(userDetails);
   return new Promise(function myFn(resolve, reject) {
       userModel.findByIdAndUpdate(id,userDetails, function returnData(error, result) {
         if(error)
         {
               reject(false);
         }
         else
         {
            resolve(result);
         }
       });

   });
}

module.exports.deleteuserDBService = (id) => { 
   return new Promise(function myFn(resolve, reject) {
       userModel.findByIdAndDelete(id, function returnData(error, result) {

         if(error)
         {
               reject(false);
         }
         else
         {
            resolve(result);
         }          
       });
   });

}