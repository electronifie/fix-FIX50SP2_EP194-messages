var invert = require('invert-obj');

function StreamCommoditySettlBusinessCenter (streamCommoditySettlBusinessCenter) {
  this.message = streamCommoditySettlBusinessCenter;
}

StreamCommoditySettlBusinessCenter.prototype.value = function () {
  return this.message;
};

StreamCommoditySettlBusinessCenter.Tag = '41250';

StreamCommoditySettlBusinessCenter.Type = 'STRING';

module.exports = StreamCommoditySettlBusinessCenter;