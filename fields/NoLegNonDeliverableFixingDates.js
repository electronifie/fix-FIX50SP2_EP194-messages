var invert = require('invert-obj');

function NoLegNonDeliverableFixingDates (noLegNonDeliverableFixingDates) {
  this.message = noLegNonDeliverableFixingDates;
}

NoLegNonDeliverableFixingDates.prototype.value = function () {
  return this.message;
};

NoLegNonDeliverableFixingDates.Tag = '40367';

NoLegNonDeliverableFixingDates.Type = 'NUMINGROUP';

module.exports = NoLegNonDeliverableFixingDates;