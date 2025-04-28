require('dotenv').config();
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const path = require('path');

app.use(express.static('public'));

app.get('/api/otp', async (req, res) => {
  const number = req.query.number;
  const apiUrl = `${process.env.API_ENDPOINT}?key=${process.env.API_KEY}&number=${number}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data && data.otp) {
      res.json({ success: true, otp: data.otp });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});