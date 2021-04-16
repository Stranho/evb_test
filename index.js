const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const jogadores = require('./api/jogadores');
const transfers = require('./api/transfers');

//const queries = require('./db/queries');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
// app.get('/Jogs', (req, res) => {
//     //var list = [[ 1, "item1"], [2, "item2"], [3, "item3"]];
//     var list = [{id: 1, nome: 'Nome 1', saldo: 10.0}, {id: 2, nome: 'Nome 2', saldo: 10.0}];
//     res.json(list);
//     console.log('Sent list of items');
// });

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/Jogadores', jogadores);
app.use('/Transfers', transfers);

// Handles any requests that don't match the ones above
// app.get('*', (req, res) => {
//     res.sendFile(join(__dirname+'/client/build/index.html'));
// });

// 404
app.use(function(req, res, next) {
  const err = new Error('Não encontrado!');
  err.status = 404;
  next(err);
});

// erro
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

module.exports = app;