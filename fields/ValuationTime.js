var invert = require('invert-obj');

function ValuationTime (valuationTime) {
  this.message = valuationTime;
}

ValuationTime.prototype.value = function () {
  return this.message;
};

ValuationTime.Tag = '2086';

ValuationTime.Type = 'LOCALMKTTIME';

module.exports = ValuationTime;