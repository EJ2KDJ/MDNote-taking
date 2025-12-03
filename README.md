A RESTful API for creating, uploading, and processing Markdown notes.  
Built with **Node.js**, **Express**, **Multer**, **Marked**, **uuid**, and a third-party grammar checking API.

## ✨ Features
- Create & upload Markdown notes  
- Convert `.md` notes to HTML format using **Marked**  
- Check grammar of notes using **LanguageTool** via built-in `fetch`

## ⚙️ How It Works
- User uploads a file → API converts/stores it as a `.md` note  
- User can:
  - Convert the Markdown file to HTML using the `/notes/:id` render endpoint  
  - Run grammar checking on file content using the `/notes/:id/grammar` endpoint

## 📘 What I Learned
- How to **read and write files** using `fs` and work with file paths using `path`  
- How to call a **third-party API** using fetch *without needing an API key*  
- How to generate **UUIDs for filenames** to avoid collisions and ensure uniqueness
