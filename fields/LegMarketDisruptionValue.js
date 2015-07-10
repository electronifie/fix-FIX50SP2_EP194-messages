var invert = require('invert-obj');

function LegMarketDisruptionValue (legMarketDisruptionValue) {
  this.message = legMarketDisruptionValue;
}

LegMarketDisruptionValue.prototype.value = function () {
  return this.message;
};

LegMarketDisruptionValue.Tag = '40223';

LegMarketDisruptionValue.Type = 'STRING';

module.exports = LegMarketDisruptionValue;