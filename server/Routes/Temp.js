const { Temp } = require('../db/models/index.js');
const { Router } = require('express');
const temp = Router();

temp.get('/', (req, res, next) => {
    res.status(200).send('MADE GET')
});

temp.post('/', (req, res, next) => {
    res.status(200).send('MADE POST')
});

module.exports = {
    temp, 
}