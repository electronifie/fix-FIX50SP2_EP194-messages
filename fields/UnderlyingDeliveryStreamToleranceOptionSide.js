var invert = require('invert-obj');

function UnderlyingDeliveryStreamToleranceOptionSide (underlyingDeliveryStreamToleranceOptionSide) {
  this.message = underlyingDeliveryStreamToleranceOptionSide;
}

UnderlyingDeliveryStreamToleranceOptionSide.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamToleranceOptionSide.Tag = '41794';

UnderlyingDeliveryStreamToleranceOptionSide.Type = 'INT';

module.exports = UnderlyingDeliveryStreamToleranceOptionSide;