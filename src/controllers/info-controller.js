const {StatusCodes} = require('http-status-codes');

const info = (req, res) => {    
    return res.status(StatusCodes.OK).json({
        code:200,
        message:'Api is live',
        data:{}
    });   
}

module.exports = {
    info
};