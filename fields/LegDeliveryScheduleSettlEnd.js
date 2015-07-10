var invert = require('invert-obj');

function LegDeliveryScheduleSettlEnd (legDeliveryScheduleSettlEnd) {
  this.message = legDeliveryScheduleSettlEnd;
}

LegDeliveryScheduleSettlEnd.prototype.value = function () {
  return this.message;
};

LegDeliveryScheduleSettlEnd.Tag = '41427';

LegDeliveryScheduleSettlEnd.Type = 'STRING';

module.exports = LegDeliveryScheduleSettlEnd;