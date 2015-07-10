var invert = require('invert-obj');

function LegStreamCommodityRateReferencePage (legStreamCommodityRateReferencePage) {
  this.message = legStreamCommodityRateReferencePage;
}

LegStreamCommodityRateReferencePage.prototype.value = function () {
  return this.message;
};

LegStreamCommodityRateReferencePage.Tag = '41659';

LegStreamCommodityRateReferencePage.Type = 'STRING';

module.exports = LegStreamCommodityRateReferencePage;