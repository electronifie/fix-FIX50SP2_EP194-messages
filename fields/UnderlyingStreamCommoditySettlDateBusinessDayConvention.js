var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlDateBusinessDayConvention (underlyingStreamCommoditySettlDateBusinessDayConvention) {
  this.message = underlyingStreamCommoditySettlDateBusinessDayConvention;
}

UnderlyingStreamCommoditySettlDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlDateBusinessDayConvention.Tag = '41982';

UnderlyingStreamCommoditySettlDateBusinessDayConvention.Type = 'INT';

module.exports = UnderlyingStreamCommoditySettlDateBusinessDayConvention;