
var ethcoin = require('./lib');

var client = new ethcoin.Client({
  host: '127.0.0.1',
  port: 8545,
  user: '',
  pass: ''
});

client.cmd('eth_accounts', '*', 6, function(err, balance){
  if (err) return console.log(err);
  console.log('Balance:', balance);
});

