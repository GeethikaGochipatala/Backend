 
var express = require('express');

const router = express.Router();

var loansController = require('../loans/loansController');

router.route('/loans/getAll').get(loansController.getDataConntrollerfn);

router.route('/loans/create').post(loansController.createloansControllerFn);

router.route('/loans/update/:id').patch(loansController.updateloansController);

router.route('/loans/delete/:id').delete(loansController.deleteloansController);

var userController = require('../users/userController');


router.route('/user/login').post(userController.loginuserControllerFn);
router.route('/user/create').post(userController.createuserControllerFn);
router.route('/user/delete/:id').delete(userController.deleteuserController);
router.route('/user/update/:id').patch(userController.updateuserController);
router.route('/user/getAll').get(userController.getDataConntrollerfn);








module.exports = router;