var invert = require('invert-obj');

function UnderlyingSettlRateIndex (underlyingSettlRateIndex) {
  this.message = underlyingSettlRateIndex;
}

UnderlyingSettlRateIndex.prototype.value = function () {
  return this.message;
};

UnderlyingSettlRateIndex.Tag = '2284';

UnderlyingSettlRateIndex.Type = 'STRING';

module.exports = UnderlyingSettlRateIndex;