var invert = require('invert-obj');

function DeliveryScheduleSettlTimeZone (deliveryScheduleSettlTimeZone) {
  this.message = deliveryScheduleSettlTimeZone;
}

DeliveryScheduleSettlTimeZone.prototype.value = function () {
  return this.message;
};

DeliveryScheduleSettlTimeZone.Tag = '41048';

DeliveryScheduleSettlTimeZone.Type = 'STRING';

module.exports = DeliveryScheduleSettlTimeZone;