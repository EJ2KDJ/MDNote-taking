import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

// Create a new note
const createNote = (req, res) => {
    try {
        const { content } = req.body; // Get note content from request body
        if (!content) {
            return res.status(400).json({ message: "Note content is required" });
        }


        const noteId = uuidv4(); // Generate a unique ID for the note
        const notePath = path.join('uploads', `${noteId}.md`); // Define the file path

        fs.writeFileSync(notePath, content, "utf-8"); // Save the note content to a markdown file

        res.status(201).json({
            message: "Note created successfully",
            noteId: noteId,
            path: notePath
        });
    } catch (err) {
        console.error("Error creating note:", err);
        res.status(500).json({ message: "Internal server error" });
    }

}

export default { createNote };