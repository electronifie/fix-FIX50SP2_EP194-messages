var invert = require('invert-obj');

function LegDeliveryStreamPositiveTolerance (legDeliveryStreamPositiveTolerance) {
  this.message = legDeliveryStreamPositiveTolerance;
}

LegDeliveryStreamPositiveTolerance.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamPositiveTolerance.Tag = '41443';

LegDeliveryStreamPositiveTolerance.Type = 'FLOAT';

module.exports = LegDeliveryStreamPositiveTolerance;