var invert = require('invert-obj');

function StreamCommodityRateReferencePageHeading (streamCommodityRateReferencePageHeading) {
  this.message = streamCommodityRateReferencePageHeading;
}

StreamCommodityRateReferencePageHeading.prototype.value = function () {
  return this.message;
};

StreamCommodityRateReferencePageHeading.Tag = '41263';

StreamCommodityRateReferencePageHeading.Type = 'STRING';

module.exports = StreamCommodityRateReferencePageHeading;