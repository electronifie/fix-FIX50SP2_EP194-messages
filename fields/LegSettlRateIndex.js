var invert = require('invert-obj');

function LegSettlRateIndex (legSettlRateIndex) {
  this.message = legSettlRateIndex;
}

LegSettlRateIndex.prototype.value = function () {
  return this.message;
};

LegSettlRateIndex.Tag = '2176';

LegSettlRateIndex.Type = 'STRING';

module.exports = LegSettlRateIndex;