var invert = require('invert-obj');

function OfferMDEntryID (offerMdentryId) {
  this.message = offerMdentryId;
}

OfferMDEntryID.prototype.value = function () {
  return this.message;
};

OfferMDEntryID.Tag = '1746';

OfferMDEntryID.Type = 'STRING';

module.exports = OfferMDEntryID;