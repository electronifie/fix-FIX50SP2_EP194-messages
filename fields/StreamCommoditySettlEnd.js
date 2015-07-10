var invert = require('invert-obj');

function StreamCommoditySettlEnd (streamCommoditySettlEnd) {
  this.message = streamCommoditySettlEnd;
}

StreamCommoditySettlEnd.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlEnd.Tag = '41288';

StreamCommoditySettlEnd.Type = 'STRING';

module.exports = StreamCommoditySettlEnd;