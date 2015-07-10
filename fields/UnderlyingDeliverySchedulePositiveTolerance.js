var invert = require('invert-obj');

function UnderlyingDeliverySchedulePositiveTolerance (underlyingDeliverySchedulePositiveTolerance) {
  this.message = underlyingDeliverySchedulePositiveTolerance;
}

UnderlyingDeliverySchedulePositiveTolerance.prototype.value = function () {
  return this.message;
};

UnderlyingDeliverySchedulePositiveTolerance.Tag = '41763';

UnderlyingDeliverySchedulePositiveTolerance.Type = 'FLOAT';

module.exports = UnderlyingDeliverySchedulePositiveTolerance;