var invert = require('invert-obj');

function NoLegCashSettlTerms (noLegCashSettlTerms) {
  this.message = noLegCashSettlTerms;
}

NoLegCashSettlTerms.prototype.value = function () {
  return this.message;
};

NoLegCashSettlTerms.Tag = '41344';

NoLegCashSettlTerms.Type = 'NUMINGROUP';

module.exports = NoLegCashSettlTerms;