var invert = require('invert-obj');

function LegStreamCommoditySettlCountry (legStreamCommoditySettlCountry) {
  this.message = legStreamCommoditySettlCountry;
}

LegStreamCommoditySettlCountry.prototype.value = function () {
  return this.message;
};

LegStreamCommoditySettlCountry.Tag = '41687';

LegStreamCommoditySettlCountry.Type = 'COUNTRY';

module.exports = LegStreamCommoditySettlCountry;