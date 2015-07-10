var invert = require('invert-obj');

function LegDeliveryScheduleSettlDay (legDeliveryScheduleSettlDay) {
  this.message = legDeliveryScheduleSettlDay;
}

LegDeliveryScheduleSettlDay.prototype.value = function () {
  return this.message;
};

LegDeliveryScheduleSettlDay.Tag = '41423';

LegDeliveryScheduleSettlDay.Type = 'INT';

module.exports = LegDeliveryScheduleSettlDay;