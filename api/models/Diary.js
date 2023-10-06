const db = require("../database/connect");

class Diary {
  constructor({ entry_id, text, category, date, time }) {
    this.entry_id = entry_id;
    this.text = text;
    this.category = category;
    this.date = date;
    this.time = time;
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM entry ORDER BY date DESC, time DESC;");
    if (response.rows.length === 0) {
      throw new Error("No entries available.");
    }
    return response.rows.map((e) => new Diary(e));
  }

  static async getOneById(id) {
    const response = await db.query(
      "SELECT * FROM entry WHERE entry_id = $1;",
      [id]
    );
    if (response.rows.length != 1) {
      throw new Error("Unable to locate entry.");
    }
    return new Diary(response.rows[0]);
  }

  static async getOneByCategory(categoryName) {
    const response = await db.query(
      "SELECT * FROM entry WHERE LOWER(category) = $1",
      [categoryName.toLowerCase()]
    );
    if (response.rows.length != 1) {
      throw new Error("Unable to locate entry.");
    }
    return new Diary(response.rows[0]);
  }

  static async getOneByDate(date) {
    const response = await db.query("SELECT * FROM entry WHERE date = $1", [
      date,
    ]);
    if (response.rows.length != 1) {
      throw new Error("Unable to locate entry.");
    }
    return new Diary(response.rows[0]);
  }

  static async getOneByString(string) {//check this
    const str = `%${string}%`;
    const response = await db.query("SELECT * FROM entry WHERE text LIKE $1 ORDER BY date DESC, time DESC;", [
      str
    ]);

    // const response = await db.query("SELECT * FROM entry WHERE text LIKE ?", [`%${string}%`]);
    if (response.rows.length === 0) {
      throw new Error("Unable to locate entry.");
    }
    return response.rows[0];  //only gets first
  }

  static async create(data) { //check time and date are working
    const { text, category } = data;
    const response = await db.query(
      "INSERT INTO entry (text, category, date, time) VALUES ($1, $2, CAST(CURRENT_TIMESTAMP AS DATE), CAST(CURRENT_TIMESTAMP AS TIME)) RETURNING *;",
      [text, category]
    );
    const entryId = response.rows[0].entry_id;
    const newEntry = await Diary.getOneById(entryId);
    return new Diary(newEntry);
  }

  async update(data) { //check time and date are working
    const newText = data.text;
    const response = await db.query("UPDATE entry SET text = $1, date=CAST(CURRENT_TIMESTAMP AS DATE), time=CAST(CURRENT_TIMESTAMP AS TIME) WHERE entry_id = $2 RETURNING *;", [newText, this.entry_id])
    if (response.rows.length != 1){
       throw new Error("Unable to update votes.")
    }
    return new Diary(response.rows[0]);
    }

  async destroy() {
    const response = await db.query(
      "DELETE FROM entry WHERE entry_id = $1 RETURNING *;",
      [this.entry_id]
    );
    return new Diary(response.rows[0]);
  }
}

module.exports = Diary;
