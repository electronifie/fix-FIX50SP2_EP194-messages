var invert = require('invert-obj');

function ValuationBusinessCenter (valuationBusinessCenter) {
  this.message = valuationBusinessCenter;
}

ValuationBusinessCenter.prototype.value = function () {
  return this.message;
};

ValuationBusinessCenter.Tag = '2087';

ValuationBusinessCenter.Type = 'STRING';

module.exports = ValuationBusinessCenter;