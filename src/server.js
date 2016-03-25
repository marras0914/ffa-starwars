'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');
var httpProxy = require('http-proxy');

var apiKey = "7c1b5905b50b778751d381cd69ff2b90";
var apiForwardingUrl = "https://api.brewerydb.com/v2/beers?styleId=93&abv=6&key=" + apiKey;

var server = express();
server.set('port', 3000);

require('./database');
require('./seed');

server.use('/', express.static('public'));
// server.use(parser.json());

var apiProxy = httpProxy.createProxyServer();
console.log('Forwarding API request tp ' + apiForwardingUrl);

server.all('/beers/*', function(req, res){
    
    apiProxy.web(req, res, {target: apiForwardingUrl});
    console.log('request made to /beer/');

});

server.use('/api', router);

server.listen(server.get('port'), function(){
    console.log('Server is running on port ' + server.get('port') );
});

