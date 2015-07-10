var invert = require('invert-obj');

function NonDeliverableFixingDateType (nonDeliverableFixingDateType) {
  this.message = nonDeliverableFixingDateType;
}

NonDeliverableFixingDateType.prototype.value = function () {
  return this.message;
};


NonDeliverableFixingDateType.Keys = {
  UNADJUSTED: '0',
  ADJUSTED: '1',
};

NonDeliverableFixingDateType.Tag = '40827';

NonDeliverableFixingDateType.Type = 'INT';

NonDeliverableFixingDateType.Values = invert(NonDeliverableFixingDateType.Keys);

module.exports = NonDeliverableFixingDateType;