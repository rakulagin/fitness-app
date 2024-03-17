const express = require('express');
const port = 3010;
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({
  limit: '50mb',
  strict: false
}))

app.use(bodyParser.urlencoded({
  extended: false,
  limit: '50mb',
  parameterLimit: 50000
}))

// Routing

app.get('/', (req, res) => {
  res.send('It works!');
});

app.get('*', (req, res) => {
  res.redirect('/');
});

// End routing

app.listen(port, () => {
  console.log(`Server run app listening on port ${port}`);
});
