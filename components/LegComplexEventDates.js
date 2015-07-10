var NoLegComplexEventDates = require('../fields/NoLegComplexEventDates');
var LegComplexEventTimes = require('../components/LegComplexEventTimes');
var LegComplexEventStartDate = require('../fields/LegComplexEventStartDate');
var LegComplexEventEndDate = require('../fields/LegComplexEventEndDate');

function LegComplexEventDates (legComplexEventDates) {
  this.message = legComplexEventDates;
}

/* group */

/* component */
LegComplexEventDates.prototype.legComplexEventTimes = function () {
  return this.message.groups[LegComplexEventTimes.Tag]
    .map(function (legComplexEventTimes) {
      return new LegComplexEventTimes(legComplexEventTimes);
  });
};

/* field */
LegComplexEventDates.prototype.legComplexEventStartDate = function () {
  return new LegComplexEventStartDate(this.message.tags[LegComplexEventStartDate.Tag]);
};

/* field */
LegComplexEventDates.prototype.legComplexEventEndDate = function () {
  return new LegComplexEventEndDate(this.message.tags[LegComplexEventEndDate.Tag]);
};

/* end group */

LegComplexEventDates.Tag = '2250';

module.exports = LegComplexEventDates;