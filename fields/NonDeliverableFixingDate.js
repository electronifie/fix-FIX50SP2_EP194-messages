var invert = require('invert-obj');

function NonDeliverableFixingDate (nonDeliverableFixingDate) {
  this.message = nonDeliverableFixingDate;
}

NonDeliverableFixingDate.prototype.value = function () {
  return this.message;
};

NonDeliverableFixingDate.Tag = '40826';

NonDeliverableFixingDate.Type = 'LOCALMKTDATE';

module.exports = NonDeliverableFixingDate;