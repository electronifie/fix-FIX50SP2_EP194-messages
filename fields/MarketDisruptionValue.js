var invert = require('invert-obj');

function MarketDisruptionValue (marketDisruptionValue) {
  this.message = marketDisruptionValue;
}

MarketDisruptionValue.prototype.value = function () {
  return this.message;
};

MarketDisruptionValue.Tag = '40991';

MarketDisruptionValue.Type = 'STRING';

module.exports = MarketDisruptionValue;