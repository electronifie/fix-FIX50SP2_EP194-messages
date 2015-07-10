var invert = require('invert-obj');

function UnderlyingDeliveryScheduleSettlFlowType (underlyingDeliveryScheduleSettlFlowType) {
  this.message = underlyingDeliveryScheduleSettlFlowType;
}

UnderlyingDeliveryScheduleSettlFlowType.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryScheduleSettlFlowType.Tag = '41768';

UnderlyingDeliveryScheduleSettlFlowType.Type = 'INT';

module.exports = UnderlyingDeliveryScheduleSettlFlowType;