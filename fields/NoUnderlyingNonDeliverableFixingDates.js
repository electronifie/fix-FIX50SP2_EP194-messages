var invert = require('invert-obj');

function NoUnderlyingNonDeliverableFixingDates (noUnderlyingNonDeliverableFixingDates) {
  this.message = noUnderlyingNonDeliverableFixingDates;
}

NoUnderlyingNonDeliverableFixingDates.prototype.value = function () {
  return this.message;
};

NoUnderlyingNonDeliverableFixingDates.Tag = '40656';

NoUnderlyingNonDeliverableFixingDates.Type = 'NUMINGROUP';

module.exports = NoUnderlyingNonDeliverableFixingDates;