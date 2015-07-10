var NoTargetMarketSegments = require('../fields/NoTargetMarketSegments');
var TargetMarketSegmentID = require('../fields/TargetMarketSegmentID');

function TargetMarketSegmentGrp (targetMarketSegmentGrp) {
  this.message = targetMarketSegmentGrp;
}

/* group */

/* field */
TargetMarketSegmentGrp.prototype.targetMarketSegmentId = function () {
  return new TargetMarketSegmentID(this.message.tags[TargetMarketSegmentID.Tag]);
};

/* end group */

TargetMarketSegmentGrp.Tag = '1789';

module.exports = TargetMarketSegmentGrp;