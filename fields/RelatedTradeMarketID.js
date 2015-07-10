var invert = require('invert-obj');

function RelatedTradeMarketID (relatedTradeMarketId) {
  this.message = relatedTradeMarketId;
}

RelatedTradeMarketID.prototype.value = function () {
  return this.message;
};

RelatedTradeMarketID.Tag = '1859';

RelatedTradeMarketID.Type = 'EXCHANGE';

module.exports = RelatedTradeMarketID;