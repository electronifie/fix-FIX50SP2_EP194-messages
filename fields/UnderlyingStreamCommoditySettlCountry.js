var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlCountry (underlyingStreamCommoditySettlCountry) {
  this.message = underlyingStreamCommoditySettlCountry;
}

UnderlyingStreamCommoditySettlCountry.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlCountry.Tag = '42003';

UnderlyingStreamCommoditySettlCountry.Type = 'COUNTRY';

module.exports = UnderlyingStreamCommoditySettlCountry;