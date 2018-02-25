Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider('http://72.174.42.154:8545')) // RINKEBY
//  web3 = new Web3(new Web3.providers.HttpProvider('http://72.174.42.154:2241')) // PRIVATE
console.log('dappzy connecting....')

if (web3) {
    console.log('dappzy successfully connected....')
    console.log('coinbase', web3.eth.coinbase)
} else {
    console.log('dappzy - errors during connection....')
}


