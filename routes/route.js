var express = require('express');
const router = express.Router();
var loansController = require('../loans/loansController');
router.route('/loans/getAll').get(loansController.getDataConntrollerfn);
router.route('/loans/get/:id').get(loansController.addloansControllerfn);

router.route('/loans/create').post(loansController.createloansControllerFn);
router.route('/loans/update/:id').put(loansController.updateloansController);
router.route('/loans/delete/:id').delete(loansController.deleteloansController);

var authcontroller = require('../auth/authcontroller');

router.route('/user/delete/:id').delete(authcontroller.deleteauthcontroller);
router.route('/user/update/:id').put(authcontroller.updateauthcontroller);
router.route('/user/getAll').get(authcontroller.getDataConntrollerfn);
module.exports = router;