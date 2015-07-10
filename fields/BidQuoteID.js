var invert = require('invert-obj');

function BidQuoteID (bidQuoteId) {
  this.message = bidQuoteId;
}

BidQuoteID.prototype.value = function () {
  return this.message;
};

BidQuoteID.Tag = '1747';

BidQuoteID.Type = 'STRING';

module.exports = BidQuoteID;