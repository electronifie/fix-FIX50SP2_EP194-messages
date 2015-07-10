var NoNotAffectedMarketSegments = require('../fields/NoNotAffectedMarketSegments');
var NotAffectedMarketSegmentID = require('../fields/NotAffectedMarketSegmentID');

function NotAffectedMarketSegmentGrp (notAffectedMarketSegmentGrp) {
  this.message = notAffectedMarketSegmentGrp;
}

/* group */

/* field */
NotAffectedMarketSegmentGrp.prototype.notAffectedMarketSegmentId = function () {
  return new NotAffectedMarketSegmentID(this.message.tags[NotAffectedMarketSegmentID.Tag]);
};

/* end group */

NotAffectedMarketSegmentGrp.Tag = '1793';

module.exports = NotAffectedMarketSegmentGrp;