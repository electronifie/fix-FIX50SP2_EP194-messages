var invert = require('invert-obj');

function UnderlyingDeliveryScheduleSettlTimeType (underlyingDeliveryScheduleSettlTimeType) {
  this.message = underlyingDeliveryScheduleSettlTimeType;
}

UnderlyingDeliveryScheduleSettlTimeType.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryScheduleSettlTimeType.Tag = '41776';

UnderlyingDeliveryScheduleSettlTimeType.Type = 'INT';

module.exports = UnderlyingDeliveryScheduleSettlTimeType;