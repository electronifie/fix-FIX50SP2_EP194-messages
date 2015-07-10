var invert = require('invert-obj');

function LegDeliverySchedulePositiveTolerance (legDeliverySchedulePositiveTolerance) {
  this.message = legDeliverySchedulePositiveTolerance;
}

LegDeliverySchedulePositiveTolerance.prototype.value = function () {
  return this.message;
};

LegDeliverySchedulePositiveTolerance.Tag = '41415';

LegDeliverySchedulePositiveTolerance.Type = 'FLOAT';

module.exports = LegDeliverySchedulePositiveTolerance;