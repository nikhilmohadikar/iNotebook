const connectToMongo = require('./database');
const express = require('express')

connectToMongo();
const app = express()
const port = 5000

// To access the body object
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get("/:universalURL", (req, res) => {
  res.send("Page not found in this URL");
});

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})