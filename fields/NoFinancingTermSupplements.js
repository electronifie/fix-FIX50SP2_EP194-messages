var invert = require('invert-obj');

function NoFinancingTermSupplements (noFinancingTermSupplements) {
  this.message = noFinancingTermSupplements;
}

NoFinancingTermSupplements.prototype.value = function () {
  return this.message;
};

NoFinancingTermSupplements.Tag = '40046';

NoFinancingTermSupplements.Type = 'NUMINGROUP';

module.exports = NoFinancingTermSupplements;