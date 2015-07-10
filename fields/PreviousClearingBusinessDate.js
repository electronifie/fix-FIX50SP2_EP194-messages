var invert = require('invert-obj');

function PreviousClearingBusinessDate (previousClearingBusinessDate) {
  this.message = previousClearingBusinessDate;
}

PreviousClearingBusinessDate.prototype.value = function () {
  return this.message;
};

PreviousClearingBusinessDate.Tag = '2084';

PreviousClearingBusinessDate.Type = 'LOCALMKTDATE';

module.exports = PreviousClearingBusinessDate;