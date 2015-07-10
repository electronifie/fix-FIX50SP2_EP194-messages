var invert = require('invert-obj');

function LegDeliveryStreamTotalPositiveTolerance (legDeliveryStreamTotalPositiveTolerance) {
  this.message = legDeliveryStreamTotalPositiveTolerance;
}

LegDeliveryStreamTotalPositiveTolerance.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamTotalPositiveTolerance.Tag = '41447';

LegDeliveryStreamTotalPositiveTolerance.Type = 'PERCENTAGE';

module.exports = LegDeliveryStreamTotalPositiveTolerance;