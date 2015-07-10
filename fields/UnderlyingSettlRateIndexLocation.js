var invert = require('invert-obj');

function UnderlyingSettlRateIndexLocation (underlyingSettlRateIndexLocation) {
  this.message = underlyingSettlRateIndexLocation;
}

UnderlyingSettlRateIndexLocation.prototype.value = function () {
  return this.message;
};

UnderlyingSettlRateIndexLocation.Tag = '2285';

UnderlyingSettlRateIndexLocation.Type = 'STRING';

module.exports = UnderlyingSettlRateIndexLocation;