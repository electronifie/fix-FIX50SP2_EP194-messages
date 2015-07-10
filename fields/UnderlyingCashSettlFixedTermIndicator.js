var invert = require('invert-obj');

function UnderlyingCashSettlFixedTermIndicator (underlyingCashSettlFixedTermIndicator) {
  this.message = underlyingCashSettlFixedTermIndicator;
}

UnderlyingCashSettlFixedTermIndicator.prototype.value = function () {
  return this.message;
};

UnderlyingCashSettlFixedTermIndicator.Tag = '42056';

UnderlyingCashSettlFixedTermIndicator.Type = 'BOOLEAN';

module.exports = UnderlyingCashSettlFixedTermIndicator;