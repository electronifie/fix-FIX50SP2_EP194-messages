var invert = require('invert-obj');

function OfferID (offerId) {
  this.message = offerId;
}

OfferID.prototype.value = function () {
  return this.message;
};

OfferID.Tag = '1867';

OfferID.Type = 'STRING';

module.exports = OfferID;