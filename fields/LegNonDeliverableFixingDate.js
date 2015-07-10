var invert = require('invert-obj');

function LegNonDeliverableFixingDate (legNonDeliverableFixingDate) {
  this.message = legNonDeliverableFixingDate;
}

LegNonDeliverableFixingDate.prototype.value = function () {
  return this.message;
};

LegNonDeliverableFixingDate.Tag = '40368';

LegNonDeliverableFixingDate.Type = 'LOCALMKTDATE';

module.exports = LegNonDeliverableFixingDate;