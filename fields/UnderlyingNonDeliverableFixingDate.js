var invert = require('invert-obj');

function UnderlyingNonDeliverableFixingDate (underlyingNonDeliverableFixingDate) {
  this.message = underlyingNonDeliverableFixingDate;
}

UnderlyingNonDeliverableFixingDate.prototype.value = function () {
  return this.message;
};

UnderlyingNonDeliverableFixingDate.Tag = '40657';

UnderlyingNonDeliverableFixingDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingNonDeliverableFixingDate;