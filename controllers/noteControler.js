import fs from 'fs';
import path from 'path'; // note in brackets bc it's a core module meaning no need to install
import { marked } from 'marked'; // In brackets because marked is not a default export
import { v4 as uuidv4 } from 'uuid';

// Create a new note
const createNote = async (req, res) => {
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

// Render MD note to HTML
const renderNote = async (req, res) => {
    try {
        const { filename } = req.body; // get filename from request body. (Not params because it's a POST request)

        // Error handling
        if (!filename) {
            return res.status(400).json({ message: "Note ID is required" });
        }

        const notePath = path.join('uploads', filename); // construct the file path

        if (!fs.existsSync(notePath)) { // check if file exists
            return res.status(404).json({ message: "Note not found" });
        }

        const content = fs.readFileSync(notePath, "utf-8") // read file in UTF-8 for proper text handling
        const html = marked(content); // convert markdown to HTML (MAIN FUNCTIONALITY)

        res.status(200).json({
            filename,
            html
        })
    } catch (err) {
        console.error("Error rendering note:", err);
        res.status(500).json({ message: "Internal server error" }); 
    }
}

export default { createNote, renderNote };