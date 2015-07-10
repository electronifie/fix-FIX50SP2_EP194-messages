var invert = require('invert-obj');

function UnderlyingDeliveryStreamPositiveTolerance (underlyingDeliveryStreamPositiveTolerance) {
  this.message = underlyingDeliveryStreamPositiveTolerance;
}

UnderlyingDeliveryStreamPositiveTolerance.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamPositiveTolerance.Tag = '41791';

UnderlyingDeliveryStreamPositiveTolerance.Type = 'FLOAT';

module.exports = UnderlyingDeliveryStreamPositiveTolerance;