var invert = require('invert-obj');

function StreamCommodityRateReferencePage (streamCommodityRateReferencePage) {
  this.message = streamCommodityRateReferencePage;
}

StreamCommodityRateReferencePage.prototype.value = function () {
  return this.message;
};

StreamCommodityRateReferencePage.Tag = '41262';

StreamCommodityRateReferencePage.Type = 'STRING';

module.exports = StreamCommodityRateReferencePage;