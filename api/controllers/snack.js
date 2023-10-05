const Snack = require('../models/snack');

async function index (req, res) {
    try {
        const snacks = await Snack.getAll();
        res.status(200).json(snacks);
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

async function show (req, res) {
    try {
        const id = parseInt(req.params.snack_id);
        const snack = await Snack.getOneById(id);
        res.status(200).json(snack);
    } catch (err) {
        res.status(404).json({error: err.message})
    }
}

async function getTop (req, res) {
    try {
        const snack = await Snack.getTopSnack();
        res.status(200).json(snack);
    } catch (err) {
        res.status(404).json({error: err.message})
    }
}

async function create (req, res) {
    try {
        const data = req.body;
        const newSnack = await Snack.create(data)
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
        const snack = await Snack.getOneById(id);
        const result = await snack.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({error: err.message})
    }
}

module.exports = { index, getTop, show, create, update, destroy }