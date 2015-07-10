var invert = require('invert-obj');

function NoLegDeliveryStreamCommoditySources (noLegDeliveryStreamCommoditySources) {
  this.message = noLegDeliveryStreamCommoditySources;
}

NoLegDeliveryStreamCommoditySources.prototype.value = function () {
  return this.message;
};

NoLegDeliveryStreamCommoditySources.Tag = '41460';

NoLegDeliveryStreamCommoditySources.Type = 'NUMINGROUP';

module.exports = NoLegDeliveryStreamCommoditySources;