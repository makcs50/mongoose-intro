const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json())
app.use(require('./routes/Students'));

app.listen(3000, () => console.log('сервер запущен успешно'));

mongoose.connect("mongodb+srv://lechiev2015:token95@cluster0.qpdtotg.mongodb.net/Students")
.then(() => console.log('Успешно соединились с сервером MongoDB'))
.catch(() => console.log('Ошибка при соединении с сервером MongoDB'))