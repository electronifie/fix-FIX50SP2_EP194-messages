var invert = require('invert-obj');

function NoNonDeliverableFixingDates (noNonDeliverableFixingDates) {
  this.message = noNonDeliverableFixingDates;
}

NoNonDeliverableFixingDates.prototype.value = function () {
  return this.message;
};

NoNonDeliverableFixingDates.Tag = '40825';

NoNonDeliverableFixingDates.Type = 'NUMINGROUP';

module.exports = NoNonDeliverableFixingDates;