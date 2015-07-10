var invert = require('invert-obj');

function UnderlyingMarketDisruptionValue (underlyingMarketDisruptionValue) {
  this.message = underlyingMarketDisruptionValue;
}

UnderlyingMarketDisruptionValue.prototype.value = function () {
  return this.message;
};

UnderlyingMarketDisruptionValue.Tag = '41338';

UnderlyingMarketDisruptionValue.Type = 'STRING';

module.exports = UnderlyingMarketDisruptionValue;