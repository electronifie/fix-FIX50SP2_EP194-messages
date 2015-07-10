var invert = require('invert-obj');

function LegDeliveryScheduleSettlTimeType (legDeliveryScheduleSettlTimeType) {
  this.message = legDeliveryScheduleSettlTimeType;
}

LegDeliveryScheduleSettlTimeType.prototype.value = function () {
  return this.message;
};

LegDeliveryScheduleSettlTimeType.Tag = '41428';

LegDeliveryScheduleSettlTimeType.Type = 'INT';

module.exports = LegDeliveryScheduleSettlTimeType;