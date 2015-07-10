var invert = require('invert-obj');

function UnderlyingDeliveryScheduleXID (underlyingDeliveryScheduleXid) {
  this.message = underlyingDeliveryScheduleXid;
}

UnderlyingDeliveryScheduleXID.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryScheduleXID.Tag = '41758';

UnderlyingDeliveryScheduleXID.Type = 'XID';

module.exports = UnderlyingDeliveryScheduleXID;