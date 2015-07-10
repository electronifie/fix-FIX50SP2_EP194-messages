var invert = require('invert-obj');

function NoLegDeliveryScheduleSettlTimes (noLegDeliveryScheduleSettlTimes) {
  this.message = noLegDeliveryScheduleSettlTimes;
}

NoLegDeliveryScheduleSettlTimes.prototype.value = function () {
  return this.message;
};

NoLegDeliveryScheduleSettlTimes.Tag = '41425';

NoLegDeliveryScheduleSettlTimes.Type = 'NUMINGROUP';

module.exports = NoLegDeliveryScheduleSettlTimes;