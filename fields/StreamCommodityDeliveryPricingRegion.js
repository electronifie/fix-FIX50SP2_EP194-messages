var invert = require('invert-obj');

function StreamCommodityDeliveryPricingRegion (streamCommodityDeliveryPricingRegion) {
  this.message = streamCommodityDeliveryPricingRegion;
}

StreamCommodityDeliveryPricingRegion.prototype.value = function () {
  return this.message;
};

StreamCommodityDeliveryPricingRegion.Tag = '42587';

StreamCommodityDeliveryPricingRegion.Type = 'STRING';

module.exports = StreamCommodityDeliveryPricingRegion;