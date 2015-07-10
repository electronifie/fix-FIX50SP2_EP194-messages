var invert = require('invert-obj');

function UnderlyingDeliveryStreamEntryPoint (underlyingDeliveryStreamEntryPoint) {
  this.message = underlyingDeliveryStreamEntryPoint;
}

UnderlyingDeliveryStreamEntryPoint.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamEntryPoint.Tag = '41779';

UnderlyingDeliveryStreamEntryPoint.Type = 'STRING';

module.exports = UnderlyingDeliveryStreamEntryPoint;