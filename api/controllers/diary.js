const Diary = require('../models/Diary');

async function index (req, res) {
    try {
        const Diarys = await Diary.getAll();
        res.status(200).json(Diarys);
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

async function show (req, res) {
    try {
        const id = parseInt(req.params.snack_id);
        const Diary = await Snack.getOneById(id);
        res.status(200).json(diary);
    } catch (err) {
        res.status(404).json({error: err.message})
    }
}

async function getTop (req, res) {
    try {
        const Diary = await Diary.getTopSnack();
        res.status(200).json(snack);
    } catch (err) {
        res.status(404).json({error: err.message})
    }
}

async function create (req, res) {
    try {
        const data = req.body;
        const newSnack = await Diary.create(data)
        res.status(201).json(newSnack);
    } catch (err) {
        res.status(404).json({error: err.message})
    }
}

async function update (req, res) {
    try {
        const id = parseInt(req.params.snack_id);
        const vote_val = parseInt(req.params.vote_val)
        const snack = await Snack.getOneById(id);
        const result = await snack.update(vote_val);
        res.status(204).json(result);
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

async function destroy (req, res) {
    try {
        const id = parseInt(req.params.snack_id);
        const snack = await Diary.getOneById(id);
        const result = await Diary.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({error: err.message})
    }
}

module.exports = { index, getTop, show, create, update, destroy }