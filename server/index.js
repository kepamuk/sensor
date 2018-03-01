const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const contacts = require('./routes/contacts')(router);
const goods = require('./routes/goods')(router);
const sender = require('./routes/sender')(router);
const content = require('./routes/content')(router);

const port = process.env.PORT || 8080;

mongoose.connect('mongodb://rusakov:Highpro2018@ds249128.mlab.com:49128/sensor',
    function (err, db) {
        if (!err) {
        } else console.log(err);
    }
);

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '../client/public_html'));

app.use('/api/contacts', contacts);
app.use('/api/sender', sender);
app.use('/api/goods', goods);
app.use('/api/content', content);

// app.get('*',(req,res) => {
//     res.sendFile(path.join(__dirname + '../../public_html/index.html'))
// });

app.listen(port, () => console.log(`Example app listening on port ${[port]}!`));