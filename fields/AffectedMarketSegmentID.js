var invert = require('invert-obj');

function AffectedMarketSegmentID (affectedMarketSegmentId) {
  this.message = affectedMarketSegmentId;
}

AffectedMarketSegmentID.prototype.value = function () {
  return this.message;
};

AffectedMarketSegmentID.Tag = '1792';

AffectedMarketSegmentID.Type = 'STRING';

module.exports = AffectedMarketSegmentID;