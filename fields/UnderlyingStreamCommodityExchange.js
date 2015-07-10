var invert = require('invert-obj');

function UnderlyingStreamCommodityExchange (underlyingStreamCommodityExchange) {
  this.message = underlyingStreamCommodityExchange;
}

UnderlyingStreamCommodityExchange.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCommodityExchange.Tag = '41973';

UnderlyingStreamCommodityExchange.Type = 'EXCHANGE';

module.exports = UnderlyingStreamCommodityExchange;