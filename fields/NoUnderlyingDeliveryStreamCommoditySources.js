var invert = require('invert-obj');

function NoUnderlyingDeliveryStreamCommoditySources (noUnderlyingDeliveryStreamCommoditySources) {
  this.message = noUnderlyingDeliveryStreamCommoditySources;
}

NoUnderlyingDeliveryStreamCommoditySources.prototype.value = function () {
  return this.message;
};

NoUnderlyingDeliveryStreamCommoditySources.Tag = '41808';

NoUnderlyingDeliveryStreamCommoditySources.Type = 'NUMINGROUP';

module.exports = NoUnderlyingDeliveryStreamCommoditySources;