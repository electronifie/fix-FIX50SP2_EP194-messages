var invert = require('invert-obj');

function LegDeliveryStreamNegativeTolerance (legDeliveryStreamNegativeTolerance) {
  this.message = legDeliveryStreamNegativeTolerance;
}

LegDeliveryStreamNegativeTolerance.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamNegativeTolerance.Tag = '41442';

LegDeliveryStreamNegativeTolerance.Type = 'FLOAT';

module.exports = LegDeliveryStreamNegativeTolerance;