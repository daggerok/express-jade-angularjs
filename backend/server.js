const express = require('express');
const app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.get('*', (req, res) => res.render('index'));

const port = process.env.PORT || '3000';
const hostname = process.env.HOST || '127.0.0.1';
app.listen(port, hostname, () => console.log(`please, visit http://${hostname}:${port}`));
