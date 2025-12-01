import express from 'express'; // using import instead of require
import uploadRoutes from './routes/uploadRoutes.js';
import noteRoutes from './routes/noteRoutes.js';

const app = express();
const PORT = 4000;

app.use(express.json());

app.use('/upload', uploadRoutes);
app.use('/notes', noteRoutes);

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
