var invert = require('invert-obj');

function LegDeliveryScheduleSettlStart (legDeliveryScheduleSettlStart) {
  this.message = legDeliveryScheduleSettlStart;
}

LegDeliveryScheduleSettlStart.prototype.value = function () {
  return this.message;
};

LegDeliveryScheduleSettlStart.Tag = '41426';

LegDeliveryScheduleSettlStart.Type = 'STRING';

module.exports = LegDeliveryScheduleSettlStart;