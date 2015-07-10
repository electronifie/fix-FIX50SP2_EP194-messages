var invert = require('invert-obj');

function OfferQuoteID (offerQuoteId) {
  this.message = offerQuoteId;
}

OfferQuoteID.prototype.value = function () {
  return this.message;
};

OfferQuoteID.Tag = '1748';

OfferQuoteID.Type = 'STRING';

module.exports = OfferQuoteID;