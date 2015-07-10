var invert = require('invert-obj');

function StreamCommodityExchange (streamCommodityExchange) {
  this.message = streamCommodityExchange;
}

StreamCommodityExchange.prototype.value = function () {
  return this.message;
};

StreamCommodityExchange.Tag = '41260';

StreamCommodityExchange.Type = 'EXCHANGE';

module.exports = StreamCommodityExchange;