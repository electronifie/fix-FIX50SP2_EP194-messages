var invert = require('invert-obj');

function UnderlyingDeliveryStreamCommoditySource (underlyingDeliveryStreamCommoditySource) {
  this.message = underlyingDeliveryStreamCommoditySource;
}

UnderlyingDeliveryStreamCommoditySource.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryStreamCommoditySource.Tag = '41809';

UnderlyingDeliveryStreamCommoditySource.Type = 'STRING';

module.exports = UnderlyingDeliveryStreamCommoditySource;