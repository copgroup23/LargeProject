const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// const path = require("path");
// const PORT = process.env.PORT || 5000;
// require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://group23:letsgetthisbread@cluster0.3dn4j.mongodb.net/LetsCWhatYouKnow?retryWrites=true&w=majority';

const client = new MongoClient(url);
client.connect();


app.post('/api/login', async (req, res, next) =>
{
    var error = '';

    const { login, password } = req.body;

    const db = client.db();

    const results = await db.collection('Users').find({
        UserName: login,
        Password: password
    }).toArray();

    var id = -1;
    var fn = '';
    var ln = '';
    var email = '';

    if (results.length > 0)
    {
        id = results[0].UserId;
        fn = results[0].FirstName;
        ln = results[0].LastName;
        email = results[0].Email;
    }

    var ret = {
        id: id,
        firstName: fn,
        lastName: ln,
        Email: email,
        error: ''
    };

    res.status(200).json(ret);
});

app.post('/api/Register', async (req, res, next) =>
{
    var error = '';

    const { firstname, lastname, email, login, password } = req.body;
    const user = {
        FirstName: firstname,
        LastName: lastname,
        Email: email,
        UserName: login,
        Password: password,
        Notes: ""
    }

    try {
      const db = client.db();
      const result = await db.collection('Users').insertOne(user);
    }
    catch(e) {
      error = e.toString();
    }

    var ret = { error: error };
    res.status(200).json(ret);
});

app.use((req, res, next) => 
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.listen(5000); // start Node + Express server on port 5000

// app.listen(PORT, () =>
// {
//   console.log(`Server listening on port ${PORT}.`);
// });