var invert = require('invert-obj');

function ValuationDate (valuationDate) {
  this.message = valuationDate;
}

ValuationDate.prototype.value = function () {
  return this.message;
};

ValuationDate.Tag = '2085';

ValuationDate.Type = 'LOCALMKTDATE';

module.exports = ValuationDate;