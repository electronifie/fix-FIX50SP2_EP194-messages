var invert = require('invert-obj');

function NoUnderlyingCashSettlTerms (noUnderlyingCashSettlTerms) {
  this.message = noUnderlyingCashSettlTerms;
}

NoUnderlyingCashSettlTerms.prototype.value = function () {
  return this.message;
};

NoUnderlyingCashSettlTerms.Tag = '42041';

NoUnderlyingCashSettlTerms.Type = 'NUMINGROUP';

module.exports = NoUnderlyingCashSettlTerms;