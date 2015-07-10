var invert = require('invert-obj');

function UnderlyingStreamCommodityPricingType (underlyingStreamCommodityPricingType) {
  this.message = underlyingStreamCommodityPricingType;
}

UnderlyingStreamCommodityPricingType.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommodityPricingType.Tag = '41978';

UnderlyingStreamCommodityPricingType.Type = 'STRING';

module.exports = UnderlyingStreamCommodityPricingType;