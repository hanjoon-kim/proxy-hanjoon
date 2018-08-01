const express = require('express');
const path = require('path');
const port = 3000;

const app = express();
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
//