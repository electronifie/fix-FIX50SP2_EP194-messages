var invert = require('invert-obj');

function LegFinancingTermSupplementDesc (legFinancingTermSupplementDesc) {
  this.message = legFinancingTermSupplementDesc;
}

LegFinancingTermSupplementDesc.prototype.value = function () {
  return this.message;
};

LegFinancingTermSupplementDesc.Tag = '42201';

LegFinancingTermSupplementDesc.Type = 'STRING';

module.exports = LegFinancingTermSupplementDesc;