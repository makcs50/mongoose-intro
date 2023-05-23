const express = require("express");

const app = express();

app.use(require('./routes/message'));

app.listen(3000);