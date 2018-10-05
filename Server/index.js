require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

require('./controller');

const port = process.env.PORT;

const app = express();
app.use(bodyParser.json());

app.get('/api/house', (req, res) => {
    const dbInstance = req.app.get('db');
    dbInstance.get_all_houses().then((data) =>{
        res.status(200).send(data)
    })
})

app.post('/api/house', (req, res) => {
    const dbInstance = req.app.get('db');
    const {property_name, address, city, what_state, zip} = req.body;
    dbInstance.add_new_house([property_name, address, city, what_state, zip]).then((response) => {
        res.sendStatus(200)
    })
})

massive(process.env.CONNECTION_STRING)
.then((dbInstance) =>{
    app.set('db', dbInstance);
    console.log('connected to the db')
})
.catch((err) => {
    console.log(err)
})

app.listen(port, () => {
    console.log(`Ship docked at port: ${port}`)
})