const model = require('../model/auth_model')
const bcrypt = require('bcrypt');
const { encode } = require('../config/jwt');

exports.login = async (req, res) => {
    const { username, password } = req.body;
    
    let response = [];
    let token = null;
    let login = false;
    let errorMessage = "";

    const user = await model.getBy(username)
    
    if(user.length != 0){
        if(bcrypt.compareSync(password, user.password)){
            token = encode({
                username: user.username,
                nama: user.nama
            });

            response.push(user)
            login = true;
        } else {
            errorMessage = "Wrong password";
        }
    } else {
        errorMessage = "Username not found";
    }

    res.status(200).json({
        data: response,
        token,
        login,
        errorMessage
    })   
}