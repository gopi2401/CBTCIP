const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require("nodemailer");
require('dotenv').config();
mongoose.connect(process.env.DB_URL)
    .then(() => { console.log("db connected!") })
    .catch((err) => {
        console.log(`db connection error ${err}`)
    });
const user = new mongoose.Schema({
    name: String,
    phone: Number
});
const User = mongoose.model('User', user);
const events = new mongoose.Schema({
    name: String,
    date: Date
});
const Events = mongoose.model('Events', events);
const server = express()
server.use(express.json())
server.use(cors())
const PORT = process.env.PORT || 3001;

//  users
server.get('/user', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (e) {
        res.sendStatus(500).send(`Internal Server Error ${e}`)
    }
});
server.get('/user/:id', async (req, res) => {
    try {
        const users = await User.findById(req.params.id);
        res.send(users);
    } catch (e) {
        res.sendStatus(500).send(`Internal Server Error ${e}`);
    }
})
server.post('/user', async (req, res) => {
    try {
        const users = await User.create(req.body);
        res.send(users);
    } catch (e) {
        res.sendStatus(500).send(`Internal Server Error ${e}`);
    }
})
server.put('/user/:id', async (req, res) => {
    try {
        const users = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(users);
    } catch (e) {
        res.sendStatus(500).send(`Internal Server Error ${e}`)
    }
})
server.delete('/user/:id', async (req, res) => {
    try {
        const users = await User.findByIdAndDelete(req.params.id);
        res.send(users);
    } catch (e) {
        res.sendStatus(500).send(`Internal Server Error ${e}`)
    }
})


// email
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL,
        pass: process.env.PASS,
    },
});
server.post('/email', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const info = await transporter.sendMail({
            from: `"${name} 👻" <${email}>`,
            to: process.env.GMAIL,
            subject: `${subject} ✔`,
            // text: message,
            html: `<b>${message}</b>`,
        });
        if (info.messageId) { res.json({ status: 'success', message: 'email send successfully!' }) }
    } catch (e) {
        res.sendStatus(500).send(`Internal Server Error ${e}`)
    }
});

// events
server.get('/event', async (req, res) => {
    try {
        const events = await Events.find();
        res.send(events);
    } catch (e) {
        res.sendStatus(500).send(`Internal Server Error ${e}`);
    }
});
server.get('/event/:id', async (req, res) => {
    try {
        const events = await Events.findById(req.params.id);
        res.send(events);
    } catch (e) {
        res.sendStatus(500).send(`Internal Server Error ${e}`);
    }
});
server.post('/event', async (req, res) => {
    try {
        const events = await Events.create(req.body);
        res.send(events);
    } catch (e) {
        res.sendStatus(500).send(`Internal Server Error ${e}`);
    }
});
server.put('/event/:id', async (req, res) => {
    try {
        const events = await Events.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(events);
    } catch (e) {
        res.sendStatus(500).send(`Internal Server Error ${e}`);
    }
});
server.delete('/event/:id', async (req, res) => {
    try {
        const events = await Events.findByIdAndDelete(req.params.id);
        res.send(events);
    } catch (e) {
        res.sendStatus(500).send(`Internal Server Error ${e}`);
    }
});
server.listen(PORT, () => {
    console.log('server listening port http://localhost:%s/',PORT)
})