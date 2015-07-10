var invert = require('invert-obj');

function LegDeliveryScheduleSettlTimeZone (legDeliveryScheduleSettlTimeZone) {
  this.message = legDeliveryScheduleSettlTimeZone;
}

LegDeliveryScheduleSettlTimeZone.prototype.value = function () {
  return this.message;
};

LegDeliveryScheduleSettlTimeZone.Tag = '41419';

LegDeliveryScheduleSettlTimeZone.Type = 'STRING';

module.exports = LegDeliveryScheduleSettlTimeZone;