var invert = require('invert-obj');

function FinancingTermSupplementDesc (financingTermSupplementDesc) {
  this.message = financingTermSupplementDesc;
}

FinancingTermSupplementDesc.prototype.value = function () {
  return this.message;
};

FinancingTermSupplementDesc.Tag = '40047';

FinancingTermSupplementDesc.Type = 'STRING';

module.exports = FinancingTermSupplementDesc;