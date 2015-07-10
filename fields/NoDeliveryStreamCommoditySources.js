var invert = require('invert-obj');

function NoDeliveryStreamCommoditySources (noDeliveryStreamCommoditySources) {
  this.message = noDeliveryStreamCommoditySources;
}

NoDeliveryStreamCommoditySources.prototype.value = function () {
  return this.message;
};

NoDeliveryStreamCommoditySources.Tag = '41085';

NoDeliveryStreamCommoditySources.Type = 'NUMINGROUP';

module.exports = NoDeliveryStreamCommoditySources;