var invert = require('invert-obj');

function UnderlyingCashSettlAmount (underlyingCashSettlAmount) {
  this.message = underlyingCashSettlAmount;
}

UnderlyingCashSettlAmount.prototype.value = function () {
  return this.message;
};

UnderlyingCashSettlAmount.Tag = '42054';

UnderlyingCashSettlAmount.Type = 'AMT';

module.exports = UnderlyingCashSettlAmount;