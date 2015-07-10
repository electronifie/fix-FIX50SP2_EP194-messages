var invert = require('invert-obj');

function LegDeliveryScheduleSettlTotalHours (legDeliveryScheduleSettlTotalHours) {
  this.message = legDeliveryScheduleSettlTotalHours;
}

LegDeliveryScheduleSettlTotalHours.prototype.value = function () {
  return this.message;
};

LegDeliveryScheduleSettlTotalHours.Tag = '41424';

LegDeliveryScheduleSettlTotalHours.Type = 'INT';

module.exports = LegDeliveryScheduleSettlTotalHours;