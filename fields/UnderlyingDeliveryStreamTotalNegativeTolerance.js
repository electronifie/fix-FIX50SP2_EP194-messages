var invert = require('invert-obj');

function UnderlyingDeliveryStreamTotalNegativeTolerance (underlyingDeliveryStreamTotalNegativeTolerance) {
  this.message = underlyingDeliveryStreamTotalNegativeTolerance;
}

UnderlyingDeliveryStreamTotalNegativeTolerance.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamTotalNegativeTolerance.Tag = '41796';

UnderlyingDeliveryStreamTotalNegativeTolerance.Type = 'PERCENTAGE';

module.exports = UnderlyingDeliveryStreamTotalNegativeTolerance;