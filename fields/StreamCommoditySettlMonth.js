var invert = require('invert-obj');

function StreamCommoditySettlMonth (streamCommoditySettlMonth) {
  this.message = streamCommoditySettlMonth;
}

StreamCommoditySettlMonth.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlMonth.Tag = '41271';

StreamCommoditySettlMonth.Type = 'INT';

module.exports = StreamCommoditySettlMonth;