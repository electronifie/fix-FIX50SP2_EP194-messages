var invert = require('invert-obj');

function DeliveryScheduleToleranceType (deliveryScheduleToleranceType) {
  this.message = deliveryScheduleToleranceType;
}

DeliveryScheduleToleranceType.prototype.value = function () {
  return this.message;
};


DeliveryScheduleToleranceType.Keys = {
  'ABSOLUTE': '0',
  'PERCENTAGE': '1',
};

DeliveryScheduleToleranceType.Tag = '41046';

DeliveryScheduleToleranceType.Type = 'INT';

DeliveryScheduleToleranceType.Values = invert(DeliveryScheduleToleranceType.Keys);

module.exports = DeliveryScheduleToleranceType;