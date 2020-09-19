const model = require('../model/user_model')
const bcrypt = require('bcrypt');

exports.getUser = async (req, res, next) => {
    const data = await model.getUser();

    res.status(200).json({
        data: data
    })    
}

exports.getBy = async (req, res) => {
    const { id } = req.query;

    const data = await model.getBy(id);

    res.status(200).json({
        data: data
    })   
}

exports.createUser = async (req, res) => {
    const { nama, username, password } = req.body; 
    const passwordHash = bcrypt.hashSync(password, 10);

    const user = {
        nama: nama,
        username: username, 
        password: passwordHash
    };

    const insert = await model.createUser(user);

    res.status(200).json({
        data: insert
    })  
}