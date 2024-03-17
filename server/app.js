const express = require('express');
const app = express();
const port = 3010;

app.get('/', (req, res) => {
  res.send('It works!');
});

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server run app listening on port ${port}`);
});
