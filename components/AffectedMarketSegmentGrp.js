var NoAffectedMarketSegments = require('../fields/NoAffectedMarketSegments');
var AffectedMarketSegmentID = require('../fields/AffectedMarketSegmentID');

function AffectedMarketSegmentGrp (affectedMarketSegmentGrp) {
  this.message = affectedMarketSegmentGrp;
}

/* group */

/* field */
AffectedMarketSegmentGrp.prototype.affectedMarketSegmentId = function () {
  return new AffectedMarketSegmentID(this.message.tags[AffectedMarketSegmentID.Tag]);
};

/* end group */

AffectedMarketSegmentGrp.Tag = '1791';

module.exports = AffectedMarketSegmentGrp;