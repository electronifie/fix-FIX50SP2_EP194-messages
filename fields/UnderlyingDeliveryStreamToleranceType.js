var invert = require('invert-obj');

function UnderlyingDeliveryStreamToleranceType (underlyingDeliveryStreamToleranceType) {
  this.message = underlyingDeliveryStreamToleranceType;
}

UnderlyingDeliveryStreamToleranceType.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamToleranceType.Tag = '41793';

UnderlyingDeliveryStreamToleranceType.Type = 'INT';

module.exports = UnderlyingDeliveryStreamToleranceType;