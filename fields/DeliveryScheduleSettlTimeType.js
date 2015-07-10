var invert = require('invert-obj');

function DeliveryScheduleSettlTimeType (deliveryScheduleSettlTimeType) {
  this.message = deliveryScheduleSettlTimeType;
}

DeliveryScheduleSettlTimeType.prototype.value = function () {
  return this.message;
};


DeliveryScheduleSettlTimeType.Keys = {
  HOUR_OF_THE_DAY: '0',
  HH_MM_TIME_FORMAT: '1',
};

DeliveryScheduleSettlTimeType.Tag = '41057';

DeliveryScheduleSettlTimeType.Type = 'INT';

DeliveryScheduleSettlTimeType.Values = invert(DeliveryScheduleSettlTimeType.Keys);

module.exports = DeliveryScheduleSettlTimeType;