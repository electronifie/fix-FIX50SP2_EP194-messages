var invert = require('invert-obj');

function UnderlyingDeliveryScheduleNegativeTolerance (underlyingDeliveryScheduleNegativeTolerance) {
  this.message = underlyingDeliveryScheduleNegativeTolerance;
}

UnderlyingDeliveryScheduleNegativeTolerance.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryScheduleNegativeTolerance.Tag = '41762';

UnderlyingDeliveryScheduleNegativeTolerance.Type = 'FLOAT';

module.exports = UnderlyingDeliveryScheduleNegativeTolerance;