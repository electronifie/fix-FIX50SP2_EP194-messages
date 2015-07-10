var invert = require('invert-obj');

function UnderlyingStreamCommoditySettlTotalHours (underlyingStreamCommoditySettlTotalHours) {
  this.message = underlyingStreamCommoditySettlTotalHours;
}

UnderlyingStreamCommoditySettlTotalHours.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommoditySettlTotalHours.Tag = '41998';

UnderlyingStreamCommoditySettlTotalHours.Type = 'INT';

module.exports = UnderlyingStreamCommoditySettlTotalHours;