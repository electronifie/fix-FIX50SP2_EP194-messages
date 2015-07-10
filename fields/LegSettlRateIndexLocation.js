var invert = require('invert-obj');

function LegSettlRateIndexLocation (legSettlRateIndexLocation) {
  this.message = legSettlRateIndexLocation;
}

LegSettlRateIndexLocation.prototype.value = function () {
  return this.message;
};

LegSettlRateIndexLocation.Tag = '2177';

LegSettlRateIndexLocation.Type = 'STRING';

module.exports = LegSettlRateIndexLocation;