var invert = require('invert-obj');

function StreamCommoditySettlDateRollUnit (streamCommoditySettlDateRollUnit) {
  this.message = streamCommoditySettlDateRollUnit;
}

StreamCommoditySettlDateRollUnit.prototype.value = function () {
  return this.message;
};


StreamCommoditySettlDateRollUnit.Keys = {
  'DAY': 'D',
};

StreamCommoditySettlDateRollUnit.Tag = '41273';

StreamCommoditySettlDateRollUnit.Type = 'STRING';

StreamCommoditySettlDateRollUnit.Values = invert(StreamCommoditySettlDateRollUnit.Keys);

module.exports = StreamCommoditySettlDateRollUnit;