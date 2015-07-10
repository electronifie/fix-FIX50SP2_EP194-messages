var invert = require('invert-obj');

function NoLegDeliveryScheduleSettlDays (noLegDeliveryScheduleSettlDays) {
  this.message = noLegDeliveryScheduleSettlDays;
}

NoLegDeliveryScheduleSettlDays.prototype.value = function () {
  return this.message;
};

NoLegDeliveryScheduleSettlDays.Tag = '41422';

NoLegDeliveryScheduleSettlDays.Type = 'NUMINGROUP';

module.exports = NoLegDeliveryScheduleSettlDays;