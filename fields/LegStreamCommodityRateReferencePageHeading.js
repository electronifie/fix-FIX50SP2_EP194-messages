var invert = require('invert-obj');

function LegStreamCommodityRateReferencePageHeading (legStreamCommodityRateReferencePageHeading) {
  this.message = legStreamCommodityRateReferencePageHeading;
}

LegStreamCommodityRateReferencePageHeading.prototype.value = function () {
  return this.message;
};

LegStreamCommodityRateReferencePageHeading.Tag = '41660';

LegStreamCommodityRateReferencePageHeading.Type = 'STRING';

module.exports = LegStreamCommodityRateReferencePageHeading;