const express = require('express');
const path = require('path');
const app = express()
require('./connection')
const User = require('./models/User')
var ip = require("ip");


app.use(express.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/users', (req, res) => {
    console.log(`estoy en ${ip.address()}`);
    console.log('api/users called!')
    User.find().exec((err, users) => res.send(users));
});

app.post('/api/user', (req, res) => {
    const user = req.body.user;
    console.log('Adding user:::::', user);
    const db_user = new User(user)
    db_user.save((err, document) => {
        if (err) console.log(err);
        console.log(document)
    })
    res.json("user added");
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(3080, () => {
    console.log('Server listening on the port::3080');
});