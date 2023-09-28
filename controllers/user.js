const { response, request } = require('express');

const usersGet = (req = request, res = response) => {
    const {q, nombre = 'No name', apikey, page = 0, limit} = req.query;

    res.status(403).json({
        msg: 'get API - controller',
        q, 
        nombre,
        apikey,
        page, 
        limit
    });    
}

const userPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.status(201).json({
        msg: 'post API - controller',
        nombre, 
        edad
    });
}

const userPut = (req, res = response) => {
    
    const id = req.params;

    res.status(403).json({
        msg: 'put API - controller',
        id
    });
}

const userPatch = (req, res = response) => {
    res.status(403).json({
        msg: 'patch API - controller'
    });
}

const userDelete = (req, res = response) => {
    res.status(403).json({
        msg: 'delete API - controller'
    });
}

module.exports = { 
    usersGet,
    userPut,
    userPost,
    userDelete,
    userPatch
};