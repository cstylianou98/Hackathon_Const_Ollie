const express = require('express');
const cors = require('cors');
const snackRouter = require('./routers/snack');

const api = express();
api.use(cors());
api.use(express.json());

api.use('/snacks', snackRouter)

api.get("/", (req, res) => {
    res.json({
    title: "Snack Rankings",
    description: "Find and rate the best snacks ever!"
    })
})



module.exports = api;

