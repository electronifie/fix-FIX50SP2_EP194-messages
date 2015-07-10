var invert = require('invert-obj');

function LegStreamCommodityPricingType (legStreamCommodityPricingType) {
  this.message = legStreamCommodityPricingType;
}

LegStreamCommodityPricingType.prototype.value = function () {
  return this.message;
};

LegStreamCommodityPricingType.Tag = '41662';

LegStreamCommodityPricingType.Type = 'STRING';

module.exports = LegStreamCommodityPricingType;