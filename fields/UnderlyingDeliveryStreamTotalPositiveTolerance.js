var invert = require('invert-obj');

function UnderlyingDeliveryStreamTotalPositiveTolerance (underlyingDeliveryStreamTotalPositiveTolerance) {
  this.message = underlyingDeliveryStreamTotalPositiveTolerance;
}

UnderlyingDeliveryStreamTotalPositiveTolerance.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamTotalPositiveTolerance.Tag = '41795';

UnderlyingDeliveryStreamTotalPositiveTolerance.Type = 'PERCENTAGE';

module.exports = UnderlyingDeliveryStreamTotalPositiveTolerance;