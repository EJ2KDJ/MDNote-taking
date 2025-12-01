const uploadFile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        res.status(200).json({
            message: "File uploaded successfully",
            file: req.file
        });

    } catch (err) {
        console.error("Error handling file upload:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default { uploadFile };
