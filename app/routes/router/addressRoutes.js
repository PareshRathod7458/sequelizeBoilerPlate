const  express = require('express');
const router = express();
const addressController = require('../../controller/adressController');
const passport = require('passport');
const addressValidation = require('../../validation/addressValidation');
const {validation} = require('../../middleware/validator');


router.post('/multiAddAddress', passport.authenticate("jwt", { session: false }), validation.body(addressValidation.addressValid), addressController.multiAddAddress);
router.get('/findAddress',passport.authenticate("jwt",{session: false}),addressController.findAddress);
router.get('/findAddress/:id',passport.authenticate("jwt",{session: false}),addressController.findAddressById);
router.put('/updateAddress/:id', passport.authenticate("jwt", { session: false }), validation.body(addressValidation.addressUpdate), addressController.updateAddress);


module.exports = router;