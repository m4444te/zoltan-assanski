const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const IMAGE_DIR = path.join(__dirname, 'public/images');

// Serve static files from the public directory
app.use(express.static('public'));

// Route to get list of images
app.get('/images', (req, res) => {
    fs.readdir(IMAGE_DIR, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory');
        }
        const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
        res.json(images);
    });
});

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
