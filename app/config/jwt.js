const jwt = require('jsonwebtoken');

const encode = (data) => {
    return jwt.sign(data,'wahyuutomoputra',{expiresIn: '48h'});
}

module.exports.encode = encode;