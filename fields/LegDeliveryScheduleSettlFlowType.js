var invert = require('invert-obj');

function LegDeliveryScheduleSettlFlowType (legDeliveryScheduleSettlFlowType) {
  this.message = legDeliveryScheduleSettlFlowType;
}

LegDeliveryScheduleSettlFlowType.prototype.value = function () {
  return this.message;
};

LegDeliveryScheduleSettlFlowType.Tag = '41420';

LegDeliveryScheduleSettlFlowType.Type = 'INT';

module.exports = LegDeliveryScheduleSettlFlowType;