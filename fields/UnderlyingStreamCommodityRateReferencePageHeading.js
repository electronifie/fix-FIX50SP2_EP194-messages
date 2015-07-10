var invert = require('invert-obj');

function UnderlyingStreamCommodityRateReferencePageHeading (underlyingStreamCommodityRateReferencePageHeading) {
  this.message = underlyingStreamCommodityRateReferencePageHeading;
}

UnderlyingStreamCommodityRateReferencePageHeading.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommodityRateReferencePageHeading.Tag = '41976';

UnderlyingStreamCommodityRateReferencePageHeading.Type = 'STRING';

module.exports = UnderlyingStreamCommodityRateReferencePageHeading;