var invert = require('invert-obj');

function NoDeliveryScheduleSettlTimes (noDeliveryScheduleSettlTimes) {
  this.message = noDeliveryScheduleSettlTimes;
}

NoDeliveryScheduleSettlTimes.prototype.value = function () {
  return this.message;
};

NoDeliveryScheduleSettlTimes.Tag = '41054';

NoDeliveryScheduleSettlTimes.Type = 'NUMINGROUP';

module.exports = NoDeliveryScheduleSettlTimes;