import pool from "../db.js";

export const addQuote = async (req, res) => {
  const { content, user_id } = req.body;
  try {
    await pool.query("INSERT INTO quotes (content, user_id) VALUES ($1, $2)", [content, user_id]);
    res.json({ message: "Quote added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllQuotes = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT q.id, q.content, u.username, q.likes FROM quotes q JOIN users u ON q.user_id = u.id"
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getQuoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM quotes WHERE id=$1", [id]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: "Quote not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateQuote = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  try {
    await pool.query("UPDATE quotes SET content=$1 WHERE id=$2", [content, id]);
    res.json({ message: "Quote updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteQuote = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM quotes WHERE id=$1", [id]);
    res.json({ message: "Quote deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const likeQuote = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("UPDATE quotes SET likes = likes + 1 WHERE id=$1", [id]);
    res.json({ message: "Quote liked successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
