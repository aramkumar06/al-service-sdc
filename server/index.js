const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('../server/index.js');
const router = require('./router.js');
const path = require('path');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', router);

app.use(express.static(path.join(__dirname, '../client/dist')), () => console.log(`rendering`))

app.listen(port, () => console.log(`you're listening to port ${port}, l e w d   b e a t s`));