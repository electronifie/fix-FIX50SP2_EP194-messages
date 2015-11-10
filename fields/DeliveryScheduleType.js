var invert = require('invert-obj');

function DeliveryScheduleType (deliveryScheduleType) {
  this.message = deliveryScheduleType;
}

DeliveryScheduleType.prototype.value = function () {
  return this.message;
};


DeliveryScheduleType.Keys = {
  'NOTIONAL': '0',
  'DELIVERY': '1',
  'PHYSICAL_SETTLEMENT_PERIOD': '2',
};

DeliveryScheduleType.Tag = '41038';

DeliveryScheduleType.Type = 'INT';

DeliveryScheduleType.Values = invert(DeliveryScheduleType.Keys);

module.exports = DeliveryScheduleType;