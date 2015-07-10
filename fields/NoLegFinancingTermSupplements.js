var invert = require('invert-obj');

function NoLegFinancingTermSupplements (noLegFinancingTermSupplements) {
  this.message = noLegFinancingTermSupplements;
}

NoLegFinancingTermSupplements.prototype.value = function () {
  return this.message;
};

NoLegFinancingTermSupplements.Tag = '42200';

NoLegFinancingTermSupplements.Type = 'NUMINGROUP';

module.exports = NoLegFinancingTermSupplements;