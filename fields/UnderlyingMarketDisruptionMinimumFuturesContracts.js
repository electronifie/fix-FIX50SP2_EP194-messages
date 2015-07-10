var invert = require('invert-obj');

function UnderlyingMarketDisruptionMinimumFuturesContracts (underlyingMarketDisruptionMinimumFuturesContracts) {
  this.message = underlyingMarketDisruptionMinimumFuturesContracts;
}

UnderlyingMarketDisruptionMinimumFuturesContracts.prototype.value = function () {
  return this.message;
};

UnderlyingMarketDisruptionMinimumFuturesContracts.Tag = '41863';

UnderlyingMarketDisruptionMinimumFuturesContracts.Type = 'INT';

module.exports = UnderlyingMarketDisruptionMinimumFuturesContracts;