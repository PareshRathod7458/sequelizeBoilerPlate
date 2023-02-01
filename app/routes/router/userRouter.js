const express = require('express');
const router = express();
const {upload} = require('../../services/multer');
const userController = require('../../controller/userController');
const userValidation = require('../../validation/userValidation')
const passport = require('passport');
const {validation} = require('../../middleware/validator');



router.post('/register', upload.single('uploadImage'), validation.body(userValidation.register), userController.register);
router.post('/login', validation.body(userValidation.login), userController.login);
router.get('/viewProfile', passport.authenticate("jwt", { session: false }), userController.viewProfile);

router.put('/updateProfile', passport.authenticate("jwt", { session: false }), upload.single('uploadImage'), validation.body(userValidation.editProfile), userController.updateProfile);
router.put('/resetPassword', passport.authenticate("jwt", { session: false }), validation.body(userValidation.resetpassword), userController.resetPassword);


module.exports = router;
