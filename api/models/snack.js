const db = require("../database/connect")

class Snack {

    constructor ({ snack_id, snack_name, snack_description, healthy, vegetarian, votes }) {
        this.snack_id = snack_id;
        this.snack_name = snack_name;
        this.snack_description = snack_description;
        this.healthy = healthy;
        this.vegetarian = vegetarian;
        this.votes = votes;
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM snack;");
        if (response.rows.length === 0) {
            throw new Error("No snacks available.")
        }
        return response.rows.map(s => new Snack(s));
    }

    static async getTopSnack() {
        const response = await db.query("SELECT * FROM snack WHERE votes=(SELECT MAX(votes) FROM snack);");
        if (response.rows.length === 0) {
            throw new Error("Voting has gone wrong")
        }
        return response.rows.map(s => new Snack(s));
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM snack WHERE snack_id = $1;", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate snack.");
        }
        return new Snack(response.rows[0]);
    }

    static async create(data) {
        const { snack_name, snack_description, healthy, vegetarian} = data;   
        const response = await db.query("INSERT INTO snack (snack_name, snack_description, healthy, vegetarian) VALUES ($1, $2, $3, $4) RETURNING *;", [snack_name, snack_description, healthy, vegetarian])
        const snackId = response.rows[0].snack_id;
        const newSnack = await Snack.getOneById(snackId);
        return new Snack(newSnack)
    }

    async update(data) {
        const voteCount = this.votes + data
        if (voteCount <0) {
            throw new Error("Unable to update votes. Make sure when updating votes are not below 0!")
        }

        const response = await db.query("UPDATE snack SET votes = $1 WHERE snack_id = $2 RETURNING *;", 
            [ voteCount, this.snack_id ]);

        if (response.rows.length != 1) {
            throw new Error("Unable to update votes.")
        }
        return new Snack(response.rows[0]);
    }

    async destroy() {
        const response = await db.query('DELETE FROM snack WHERE snack_id = $1 RETURNING *;', [this.snack_id]);
        return new Snack(response.rows[0]);
    }
}

module.exports = Snack;
