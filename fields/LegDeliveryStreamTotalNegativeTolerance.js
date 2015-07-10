var invert = require('invert-obj');

function LegDeliveryStreamTotalNegativeTolerance (legDeliveryStreamTotalNegativeTolerance) {
  this.message = legDeliveryStreamTotalNegativeTolerance;
}

LegDeliveryStreamTotalNegativeTolerance.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamTotalNegativeTolerance.Tag = '41448';

LegDeliveryStreamTotalNegativeTolerance.Type = 'PERCENTAGE';

module.exports = LegDeliveryStreamTotalNegativeTolerance;