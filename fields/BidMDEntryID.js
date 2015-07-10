var invert = require('invert-obj');

function BidMDEntryID (bidMdentryId) {
  this.message = bidMdentryId;
}

BidMDEntryID.prototype.value = function () {
  return this.message;
};

BidMDEntryID.Tag = '1745';

BidMDEntryID.Type = 'STRING';

module.exports = BidMDEntryID;