import express from "express";
import {
  addQuote,
  getAllQuotes,
  getQuoteById,
  updateQuote,
  deleteQuote,
  likeQuote
} from "../controllers/quoteController.js";

const router = express.Router();

router.post("/add", addQuote);
router.get("/all", getAllQuotes);
router.get("/:id", getQuoteById);
router.put("/:id", updateQuote);
router.delete("/:id", deleteQuote);
router.post("/:id/like", likeQuote);

export default router;
