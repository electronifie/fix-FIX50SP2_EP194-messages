var invert = require('invert-obj');

function MarketDisruptionMinimumFuturesContracts (marketDisruptionMinimumFuturesContracts) {
  this.message = marketDisruptionMinimumFuturesContracts;
}

MarketDisruptionMinimumFuturesContracts.prototype.value = function () {
  return this.message;
};

MarketDisruptionMinimumFuturesContracts.Tag = '41091';

MarketDisruptionMinimumFuturesContracts.Type = 'INT';

module.exports = MarketDisruptionMinimumFuturesContracts;