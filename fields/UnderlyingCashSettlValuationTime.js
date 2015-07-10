var invert = require('invert-obj');

function UnderlyingCashSettlValuationTime (underlyingCashSettlValuationTime) {
  this.message = underlyingCashSettlValuationTime;
}

UnderlyingCashSettlValuationTime.prototype.value = function () {
  return this.message;
};

UnderlyingCashSettlValuationTime.Tag = '42046';

UnderlyingCashSettlValuationTime.Type = 'LOCALMKTTIME';

module.exports = UnderlyingCashSettlValuationTime;