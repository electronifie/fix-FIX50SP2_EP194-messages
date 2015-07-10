var invert = require('invert-obj');

function LegStreamCommodityDeliveryPricingRegion (legStreamCommodityDeliveryPricingRegion) {
  this.message = legStreamCommodityDeliveryPricingRegion;
}

LegStreamCommodityDeliveryPricingRegion.prototype.value = function () {
  return this.message;
};

LegStreamCommodityDeliveryPricingRegion.Tag = '42588';

LegStreamCommodityDeliveryPricingRegion.Type = 'STRING';

module.exports = LegStreamCommodityDeliveryPricingRegion;