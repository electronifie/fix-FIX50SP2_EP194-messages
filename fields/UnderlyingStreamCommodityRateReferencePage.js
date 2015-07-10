var invert = require('invert-obj');

function UnderlyingStreamCommodityRateReferencePage (underlyingStreamCommodityRateReferencePage) {
  this.message = underlyingStreamCommodityRateReferencePage;
}

UnderlyingStreamCommodityRateReferencePage.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommodityRateReferencePage.Tag = '41975';

UnderlyingStreamCommodityRateReferencePage.Type = 'STRING';

module.exports = UnderlyingStreamCommodityRateReferencePage;