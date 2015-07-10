var invert = require('invert-obj');

function NoUnderlyingDeliveryScheduleSettlTimes (noUnderlyingDeliveryScheduleSettlTimes) {
  this.message = noUnderlyingDeliveryScheduleSettlTimes;
}

NoUnderlyingDeliveryScheduleSettlTimes.prototype.value = function () {
  return this.message;
};

NoUnderlyingDeliveryScheduleSettlTimes.Tag = '41773';

NoUnderlyingDeliveryScheduleSettlTimes.Type = 'NUMINGROUP';

module.exports = NoUnderlyingDeliveryScheduleSettlTimes;