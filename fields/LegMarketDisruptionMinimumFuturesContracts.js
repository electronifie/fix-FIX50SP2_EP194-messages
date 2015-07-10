var invert = require('invert-obj');

function LegMarketDisruptionMinimumFuturesContracts (legMarketDisruptionMinimumFuturesContracts) {
  this.message = legMarketDisruptionMinimumFuturesContracts;
}

LegMarketDisruptionMinimumFuturesContracts.prototype.value = function () {
  return this.message;
};

LegMarketDisruptionMinimumFuturesContracts.Tag = '41466';

LegMarketDisruptionMinimumFuturesContracts.Type = 'INT';

module.exports = LegMarketDisruptionMinimumFuturesContracts;