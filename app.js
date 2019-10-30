var express = require('express');
var bodyParser = require('body-parser');
const { handle } = require('./handler');

var app = express();
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3000;

// assuming valid ip or url at root
app.post('/', function(req, res) {
  var url = req.body.url;
  var ip = req.body.ip;

  try {
    handle(ip || url);

    res.status(200).send();
  } catch (error) {
    console.log(error);

    res.status(500).send();
  }
});

app.listen(port, () => console.log(`noise app listening on port ${port}!`));

module.exports = app;
