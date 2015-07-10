var invert = require('invert-obj');

function NotAffectedMarketSegmentID (notAffectedMarketSegmentId) {
  this.message = notAffectedMarketSegmentId;
}

NotAffectedMarketSegmentID.prototype.value = function () {
  return this.message;
};

NotAffectedMarketSegmentID.Tag = '1794';

NotAffectedMarketSegmentID.Type = 'STRING';

module.exports = NotAffectedMarketSegmentID;