var invert = require('invert-obj');

function StreamCommoditySettlCountry (streamCommoditySettlCountry) {
  this.message = streamCommoditySettlCountry;
}

StreamCommoditySettlCountry.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlCountry.Tag = '41290';

StreamCommoditySettlCountry.Type = 'COUNTRY';

module.exports = StreamCommoditySettlCountry;