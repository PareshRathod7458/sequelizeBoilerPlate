const config = require('./config');
const logger = require('../logger/logger');
class GeneralResponse{
     constructor(message, result, statusCode = ""){
        logger.info("message",message);
        this.message = message;
        this.statusCode = statusCode == "" ? config.HTTP_SUCCESS: statusCode;
        this.result = result = result;
     }
}

module.exports = {
    GeneralResponse
}