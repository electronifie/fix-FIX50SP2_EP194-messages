var invert = require('invert-obj');

function UnderlyingNonDeliverableFixingDateType (underlyingNonDeliverableFixingDateType) {
  this.message = underlyingNonDeliverableFixingDateType;
}

UnderlyingNonDeliverableFixingDateType.prototype.value = function () {
  return this.message;
};

UnderlyingNonDeliverableFixingDateType.Tag = '40658';

UnderlyingNonDeliverableFixingDateType.Type = 'INT';

module.exports = UnderlyingNonDeliverableFixingDateType;