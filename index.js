const express = require('express');
const app = express();

// Route: /sayHello
app.get('/sayHello', (req, res) => {
    res.json({ message: 'Hello vinod kumar ' });
});

// Start the server
const PORT = process.env.PORT || 8086;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
