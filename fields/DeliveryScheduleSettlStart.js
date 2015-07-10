var invert = require('invert-obj');

function DeliveryScheduleSettlStart (deliveryScheduleSettlStart) {
  this.message = deliveryScheduleSettlStart;
}

DeliveryScheduleSettlStart.prototype.value = function () {
  return this.message;
};

DeliveryScheduleSettlStart.Tag = '41055';

DeliveryScheduleSettlStart.Type = 'STRING';

module.exports = DeliveryScheduleSettlStart;