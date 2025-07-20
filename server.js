const express = require('express');
const cors = require('cors');

const apprenantProxy = require('./routes/apprenantProxy');
const briefProxy = require('./routes/briefProxy');
const authProxy = require('./routes/authProxy');
const competenceProxy = require('./routes/competenceProxy');

const app = express();
app.use(cors());

app.use(...apprenantProxy);
app.use(briefProxy); 
app.use(...authProxy);
app.use(...competenceProxy);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
