const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(express.json()); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', workPermitRouter);



app.listen(PORT, () => {
  console.log(`Server running successfully at port ${PORT}`);
});
