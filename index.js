const express = require('express');
const app = express();

// Route: /sayHello
app.get('/sayHello', (req, res) => {
    res.json({ message: 'Hello Your' });
});

// Start the server
const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
