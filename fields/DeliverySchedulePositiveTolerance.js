var invert = require('invert-obj');

function DeliverySchedulePositiveTolerance (deliverySchedulePositiveTolerance) {
  this.message = deliverySchedulePositiveTolerance;
}

DeliverySchedulePositiveTolerance.prototype.value = function () {
  return this.message;
};

DeliverySchedulePositiveTolerance.Tag = '41044';

DeliverySchedulePositiveTolerance.Type = 'FLOAT';

module.exports = DeliverySchedulePositiveTolerance;