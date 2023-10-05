const express = require('express');
const cors = require('cors');
const diaryRouter = require('./routers/diary');

const api = express();
api.use(cors());
api.use(express.json());

api.use('/entries', diaryRouter)

api.get("/", (req, res) => {
    res.json({
    title: "Diary entries"
    })
})



module.exports = api;

