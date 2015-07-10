var invert = require('invert-obj');

function DeliveryScheduleSettlEnd (deliveryScheduleSettlEnd) {
  this.message = deliveryScheduleSettlEnd;
}

DeliveryScheduleSettlEnd.prototype.value = function () {
  return this.message;
};

DeliveryScheduleSettlEnd.Tag = '41056';

DeliveryScheduleSettlEnd.Type = 'STRING';

module.exports = DeliveryScheduleSettlEnd;