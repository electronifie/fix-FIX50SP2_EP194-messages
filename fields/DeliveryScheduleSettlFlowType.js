var invert = require('invert-obj');

function DeliveryScheduleSettlFlowType (deliveryScheduleSettlFlowType) {
  this.message = deliveryScheduleSettlFlowType;
}

DeliveryScheduleSettlFlowType.prototype.value = function () {
  return this.message;
};


DeliveryScheduleSettlFlowType.Keys = {
  ALL_TIMES: '0',
  ON_PEAK: '1',
  OFF_PEAK: '2',
  BASE: '3',
  BLOCK_HOURS: '4',
  OTHER: '5',
};

DeliveryScheduleSettlFlowType.Tag = '41049';

DeliveryScheduleSettlFlowType.Type = 'INT';

DeliveryScheduleSettlFlowType.Values = invert(DeliveryScheduleSettlFlowType.Keys);

module.exports = DeliveryScheduleSettlFlowType;