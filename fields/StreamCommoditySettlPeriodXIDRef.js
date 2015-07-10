var invert = require('invert-obj');

function StreamCommoditySettlPeriodXIDRef (streamCommoditySettlPeriodXidref) {
  this.message = streamCommoditySettlPeriodXidref;
}

StreamCommoditySettlPeriodXIDRef.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlPeriodXIDRef.Tag = '41302';

StreamCommoditySettlPeriodXIDRef.Type = 'XIDREF';

module.exports = StreamCommoditySettlPeriodXIDRef;