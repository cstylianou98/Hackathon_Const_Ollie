const Diary = require('../models/Diary');


async function index (req, res) {
    try {
        const diaries = await Diary.getAll();
        res.status(200).json(diaries);
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

async function show (req, res) {
    try {
        const id = parseInt(req.params.entry_id);
        const diary = await Diary.getOneById(id);
        res.status(200).json(diary);
    } catch (err) {
        res.status(404).json({error: err.message})
    }
}

async function showByCategory (req,res) {
    try {
        const category = req.params.category;
        const diary = await Diary.getOneByCategory(category);
        res.status(200).json(diary);
    } catch (err) {
        res.status(404).json({error :err.message})
    }
}

async function showByDate (req,res) {
    try {
        const date = req.params.date;
        const diary = await Diary.getOneByDate(date);
        res.status(200).json(diary);
    } catch (err) {
        res.status(404).json({error :err.message})
    }
}

async function showByString (req,res) {
    try {
        const string = req.params.string;
        const diary = await Diary.getOneByString(string);
        res.status(200).json(diary);
    } catch (err) {
        res.status(404).json({error :err.message})
    }
}


async function create (req, res) {
    try {
        const data = req.body;
        const newEntry = await Diary.create(data)
        res.status(201).json(newEntry);
    } catch (err) {
        res.status(404).json({error: err.message})
    }
}

async function update (req, res) {
    try {
        const id = parseInt(req.params.entry_id);
        const data = req.body;
        const diary = await Diary.getOneById(id);
        const result = await diary.update(data);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

async function destroy (req, res) {
    try {
        const id = parseInt(req.params.entry_id);
        const diary = await Diary.getOneById(id);
        const result = await diary.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({error: err.message})
    }
}

module.exports = { index, show, showByCategory, showByDate, showByString, create, update, destroy }