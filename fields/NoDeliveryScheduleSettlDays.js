var invert = require('invert-obj');

function NoDeliveryScheduleSettlDays (noDeliveryScheduleSettlDays) {
  this.message = noDeliveryScheduleSettlDays;
}

NoDeliveryScheduleSettlDays.prototype.value = function () {
  return this.message;
};

NoDeliveryScheduleSettlDays.Tag = '41051';

NoDeliveryScheduleSettlDays.Type = 'NUMINGROUP';

module.exports = NoDeliveryScheduleSettlDays;