var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlMonth (underlyingStreamCommoditySettlMonth) {
  this.message = underlyingStreamCommoditySettlMonth;
}

UnderlyingStreamCommoditySettlMonth.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlMonth.Tag = '41984';

UnderlyingStreamCommoditySettlMonth.Type = 'INT';

module.exports = UnderlyingStreamCommoditySettlMonth;