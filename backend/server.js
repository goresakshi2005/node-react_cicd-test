const express = require('express');
const helmet = require('helmet');  // not installed
const app = express();

app.use(helmet());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

module.exports = app;
