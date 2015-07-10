var invert = require('invert-obj');

function LegDeliveryScheduleXID (legDeliveryScheduleXid) {
  this.message = legDeliveryScheduleXid;
}

LegDeliveryScheduleXID.prototype.value = function () {
  return this.message;
};

LegDeliveryScheduleXID.Tag = '41410';

LegDeliveryScheduleXID.Type = 'XID';

module.exports = LegDeliveryScheduleXID;