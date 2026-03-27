const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  // Deliberate error: returns "Hello from backend" but test expects "Hello, World!"
  res.json({ message: 'Hello from backend' });
});

const PORT = process.env.PORT || 5000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
}

module.exports = app;