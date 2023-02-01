let express = require("express");
let router = express.Router();
const userRoutes = require('./router/userRouter');
const addressRoutes = require('./router/addressRoutes')
router.use('/', userRoutes);
router.use('/', addressRoutes)


module.exports = router;
