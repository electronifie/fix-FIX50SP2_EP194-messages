var invert = require('invert-obj');

function LegDeliveryScheduleNegativeTolerance (legDeliveryScheduleNegativeTolerance) {
  this.message = legDeliveryScheduleNegativeTolerance;
}

LegDeliveryScheduleNegativeTolerance.prototype.value = function () {
  return this.message;
};

LegDeliveryScheduleNegativeTolerance.Tag = '41414';

LegDeliveryScheduleNegativeTolerance.Type = 'FLOAT';

module.exports = LegDeliveryScheduleNegativeTolerance;