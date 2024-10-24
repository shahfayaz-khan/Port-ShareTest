const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// EXPRESS INIT AND PORT  and socket server io
const app = express();

const PORT = process.env.PORT || 3000;
// EXPRESS SESSION MIDDLEWARE

// MIDDLEWARE
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.set('trust proxy', true);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json({ limit: '50mb' }));

// API ROUTES
app.get('/connection', (req, res) => {
  console.log('request recevied');
  return res.json({ status: true, message: 'nodejs server api is working fine!' });
});

app.listen(PORT, async () => {
  console.log(`server running on http://localhost:${PORT}`);
});
