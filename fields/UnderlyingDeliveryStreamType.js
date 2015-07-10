var invert = require('invert-obj');

function UnderlyingDeliveryStreamType (underlyingDeliveryStreamType) {
  this.message = underlyingDeliveryStreamType;
}

UnderlyingDeliveryStreamType.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamType.Tag = '41777';

UnderlyingDeliveryStreamType.Type = 'INT';

module.exports = UnderlyingDeliveryStreamType;