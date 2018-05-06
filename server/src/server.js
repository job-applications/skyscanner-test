require('isomorphic-fetch');
require('es6-promise').polyfill();

const express = require('express');
const compression = require('compression')
const app = express();
const api = require('./api/');

// const fs = require('fs');
const ClientSearchResult = require('./classes/client-search-result');

app.use(compression());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
  Simple flight search api wrapper.

  TODO: client should provide params

  Api params and location values are here:
  http://business.skyscanner.net/portal/en-GB/Documentation/FlightsLivePricingQuickStart
*/
app.get('/api/search', (req, res) => {

  /*fs.readFile('query.raw.json', 'utf8', function(err, contents) {
    setTimeout(() => {
      let result = JSON.parse(contents);
      res.json(ClientSearchResult.getLeanResult(result));
    }, 10000);
  });*/

  api.livePricing.search({
    // TODO client to provide params
    // check in api docs what client should provide
    ...req.query
  })
  .then((results) => {
    res.json(ClientSearchResult.getLeanResult(results));
  })
  .catch(console.error);
});

app.listen(4000, () => {
  console.log('Node server listening on http://localhost:4000');
});
