const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// установка схемы
const userScheme = new Schema({
    uid: String,
    name: String,
    message: String,
    date: Date,
    age: Number
});

mongoose.connect("mongodb://localhost:27017/test",
    {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('connect!');
    });

const User = mongoose.model("User", userScheme);
const user = new User({
    uid: "Текст",
    name: "Sava",
    message:"Сообщение",
    date: new Date().toString(),
    age: 32
});


user.save((err) => {
    mongoose.disconnect();  // отключение от базы данных

    if (err) return console.log(err);
    console.log("Сохранен объект", user);
});
