var invert = require('invert-obj');

function LegNonDeliverableFixingDateType (legNonDeliverableFixingDateType) {
  this.message = legNonDeliverableFixingDateType;
}

LegNonDeliverableFixingDateType.prototype.value = function () {
  return this.message;
};

LegNonDeliverableFixingDateType.Tag = '40369';

LegNonDeliverableFixingDateType.Type = 'INT';

module.exports = LegNonDeliverableFixingDateType;