import express from "express";
import Note from "../models/notes.model.js";

const router = express.Router();

//post new notes
router.post("/posts", async (req, res) => {
  const note = req.body;
  if (!note.title || !note.description) {
    return res.status(400).json({
      sucess: false,
      message: "Insert both fields",
    });
  }
  const newNote = new Note(note);
  try {
    await newNote.save();
    res.status(201).json({
      sucess: true,
      data: newNote,
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ sucess: false, message: "Server error" });
  }
});

// to get all notes
router.get("/getnotes", async (req, res) => {
  try {
    const notes = await Note.find({});
    res.status(200).json({ success: true, data: notes });
  } catch (error) {
    res.status(500).json({ succss: false, message: "Server errro" });
  }
});
export default router;
