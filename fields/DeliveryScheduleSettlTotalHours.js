var invert = require('invert-obj');

function DeliveryScheduleSettlTotalHours (deliveryScheduleSettlTotalHours) {
  this.message = deliveryScheduleSettlTotalHours;
}

DeliveryScheduleSettlTotalHours.prototype.value = function () {
  return this.message;
};

DeliveryScheduleSettlTotalHours.Tag = '41053';

DeliveryScheduleSettlTotalHours.Type = 'INT';

module.exports = DeliveryScheduleSettlTotalHours;