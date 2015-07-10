var invert = require('invert-obj');

function LegStreamCommodityExchange (legStreamCommodityExchange) {
  this.message = legStreamCommodityExchange;
}

LegStreamCommodityExchange.prototype.value = function () {
  return this.message;
};

LegStreamCommodityExchange.Tag = '41657';

LegStreamCommodityExchange.Type = 'EXCHANGE';

module.exports = LegStreamCommodityExchange;