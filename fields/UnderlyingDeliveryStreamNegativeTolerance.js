var invert = require('invert-obj');

function UnderlyingDeliveryStreamNegativeTolerance (underlyingDeliveryStreamNegativeTolerance) {
  this.message = underlyingDeliveryStreamNegativeTolerance;
}

UnderlyingDeliveryStreamNegativeTolerance.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamNegativeTolerance.Tag = '41790';

UnderlyingDeliveryStreamNegativeTolerance.Type = 'FLOAT';

module.exports = UnderlyingDeliveryStreamNegativeTolerance;