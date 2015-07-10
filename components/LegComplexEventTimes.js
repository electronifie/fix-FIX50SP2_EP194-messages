var NoLegComplexEventTimes = require('../fields/NoLegComplexEventTimes');
var LegComplexEventStartTime = require('../fields/LegComplexEventStartTime');
var LegComplexEventEndTime = require('../fields/LegComplexEventEndTime');

function LegComplexEventTimes (legComplexEventTimes) {
  this.message = legComplexEventTimes;
}

/* group */

/* field */
LegComplexEventTimes.prototype.legComplexEventStartTime = function () {
  return new LegComplexEventStartTime(this.message.tags[LegComplexEventStartTime.Tag]);
};

/* field */
LegComplexEventTimes.prototype.legComplexEventEndTime = function () {
  return new LegComplexEventEndTime(this.message.tags[LegComplexEventEndTime.Tag]);
};

/* end group */

LegComplexEventTimes.Tag = '2253';

module.exports = LegComplexEventTimes;