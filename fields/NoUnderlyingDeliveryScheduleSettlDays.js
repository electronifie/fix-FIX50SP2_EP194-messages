var invert = require('invert-obj');

function NoUnderlyingDeliveryScheduleSettlDays (noUnderlyingDeliveryScheduleSettlDays) {
  this.message = noUnderlyingDeliveryScheduleSettlDays;
}

NoUnderlyingDeliveryScheduleSettlDays.prototype.value = function () {
  return this.message;
};

NoUnderlyingDeliveryScheduleSettlDays.Tag = '41770';

NoUnderlyingDeliveryScheduleSettlDays.Type = 'NUMINGROUP';

module.exports = NoUnderlyingDeliveryScheduleSettlDays;