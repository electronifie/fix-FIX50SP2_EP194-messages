var invert = require('invert-obj');

function DeliveryScheduleXID (deliveryScheduleXid) {
  this.message = deliveryScheduleXid;
}

DeliveryScheduleXID.prototype.value = function () {
  return this.message;
};

DeliveryScheduleXID.Tag = '41039';

DeliveryScheduleXID.Type = 'XID';

module.exports = DeliveryScheduleXID;