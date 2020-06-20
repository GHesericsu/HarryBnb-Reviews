const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile.js')[environment];
// eslint-disable-next-line import/order
const knex = require('knex')(configuration);


const app = express();

const port = process.env.PORT || 3009;
const url = `http://localhost:${port}`;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/rooms/:roomId/reviews', (req, res) => {
  const { roomId } = req.params;
  knex
    .select()
    .from('reviews')
    .whereIn('room_id', [roomId])
    .then(
      (data) => {
        res.send(data);
        console.log('APP GET SUCCESS');
      },
    )
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`Listening at ${url}`);
});
console.log('node works in root');
