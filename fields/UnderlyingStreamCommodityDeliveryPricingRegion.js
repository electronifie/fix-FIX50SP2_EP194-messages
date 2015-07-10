var invert = require('invert-obj');

function UnderlyingStreamCommodityDeliveryPricingRegion (underlyingStreamCommodityDeliveryPricingRegion) {
  this.message = underlyingStreamCommodityDeliveryPricingRegion;
}

UnderlyingStreamCommodityDeliveryPricingRegion.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommodityDeliveryPricingRegion.Tag = '42589';

UnderlyingStreamCommodityDeliveryPricingRegion.Type = 'STRING';

module.exports = UnderlyingStreamCommodityDeliveryPricingRegion;