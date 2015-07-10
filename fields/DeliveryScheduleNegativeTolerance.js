var invert = require('invert-obj');

function DeliveryScheduleNegativeTolerance (deliveryScheduleNegativeTolerance) {
  this.message = deliveryScheduleNegativeTolerance;
}

DeliveryScheduleNegativeTolerance.prototype.value = function () {
  return this.message;
};

DeliveryScheduleNegativeTolerance.Tag = '41043';

DeliveryScheduleNegativeTolerance.Type = 'FLOAT';

module.exports = DeliveryScheduleNegativeTolerance;