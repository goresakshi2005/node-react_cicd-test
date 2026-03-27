const express = require('express');
const cors = require('cors');   // <-- this package is not in package.json
const app = express();

app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

module.exports = app;
