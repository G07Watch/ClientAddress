const express = require("express");
const app = express();
const geoRouter = require('./routes/api/geo')

app.get("/", (req, res) => {
  res.send("Hi World!");
});

app.use('/api/geo', geoRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running
  on port ${port}`));
