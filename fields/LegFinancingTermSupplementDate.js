var invert = require('invert-obj');

function LegFinancingTermSupplementDate (legFinancingTermSupplementDate) {
  this.message = legFinancingTermSupplementDate;
}

LegFinancingTermSupplementDate.prototype.value = function () {
  return this.message;
};

LegFinancingTermSupplementDate.Tag = '42202';

LegFinancingTermSupplementDate.Type = 'LOCALMKTDATE';

module.exports = LegFinancingTermSupplementDate;