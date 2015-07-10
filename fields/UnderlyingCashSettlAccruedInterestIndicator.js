var invert = require('invert-obj');

function UnderlyingCashSettlAccruedInterestIndicator (underlyingCashSettlAccruedInterestIndicator) {
  this.message = underlyingCashSettlAccruedInterestIndicator;
}

UnderlyingCashSettlAccruedInterestIndicator.prototype.value = function () {
  return this.message;
};

UnderlyingCashSettlAccruedInterestIndicator.Tag = '42057';

UnderlyingCashSettlAccruedInterestIndicator.Type = 'BOOLEAN';

module.exports = UnderlyingCashSettlAccruedInterestIndicator;