var invert = require('invert-obj');

function FinancingTermSupplementDate (financingTermSupplementDate) {
  this.message = financingTermSupplementDate;
}

FinancingTermSupplementDate.prototype.value = function () {
  return this.message;
};

FinancingTermSupplementDate.Tag = '40048';

FinancingTermSupplementDate.Type = 'LOCALMKTDATE';

module.exports = FinancingTermSupplementDate;