import express from 'express';
import foo from './foo';

const read = require('../routes/api/musicians');
const pushData = require('../routes/api/pushData');
const updateMusic = require('../routes/api/updateMusicians');
const app = express();
const mongoose = require('mongoose');

const port = 3000;
app.use(express.json());

// For security purpose this connection string can also be imported from .env file or config which is not git commited.
// So i just rather let it stay this way but it can be done.

const connectionString =
  'mongodb+srv://rikeshKamra:rikeshKnockProject@knockproject.uu6lz.mongodb.net/artists?retryWrites=true&w=majority';

//Database Connection
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World! ' + foo()));

// API calls
app.use('/musicians', read);
app.use('/insertData', pushData);
app.use('/updateMusicians', updateMusic);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
