const express = require('express');
const cors = require('cors');
const entryRouter = require('./routers/diary');

const api = express();
api.use(cors());
api.use(express.json());

api.use('/entries', entryRouter)

api.get("/", (req, res) => {
    res.json({
    title: "Diary entries"
    })
})



module.exports = api;

