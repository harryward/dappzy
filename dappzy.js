// var Promise = require('promise/domains');
// var unirest = require("unirest");
// var querystring = require("querystring");
// var config = require('./config');


Web3 = require('web3');


// web3 = new Web3(new Web3.providers.HttpProvider('http://72.174.42.154:4099')) // MAIN
// web3 = new Web3(new Web3.providers.HttpProvider('http://72.174.42.154:2241')) // PRIVATE
web3 = new Web3(new Web3.providers.HttpProvider('http://72.174.42.154:8545')) // RINKEBY TESTNET


console.log('coinbase',web3.eth.coinbase)


