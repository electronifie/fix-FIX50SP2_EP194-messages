var invert = require('invert-obj');

function StreamCommodityPricingType (streamCommodityPricingType) {
  this.message = streamCommodityPricingType;
}

StreamCommodityPricingType.prototype.value = function () {
  return this.message;
};

StreamCommodityPricingType.Tag = '41265';

StreamCommodityPricingType.Type = 'STRING';

module.exports = StreamCommodityPricingType;