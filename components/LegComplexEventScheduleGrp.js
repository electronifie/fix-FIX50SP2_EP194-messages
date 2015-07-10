var NoLegComplexEventSchedules = require('../fields/NoLegComplexEventSchedules');
var LegComplexEventScheduleStartDate = require('../fields/LegComplexEventScheduleStartDate');
var LegComplexEventScheduleEndDate = require('../fields/LegComplexEventScheduleEndDate');
var LegComplexEventScheduleFrequencyPeriod = require('../fields/LegComplexEventScheduleFrequencyPeriod');
var LegComplexEventScheduleFrequencyUnit = require('../fields/LegComplexEventScheduleFrequencyUnit');
var LegComplexEventScheduleRollConvention = require('../fields/LegComplexEventScheduleRollConvention');

function LegComplexEventScheduleGrp (legComplexEventScheduleGrp) {
  this.message = legComplexEventScheduleGrp;
}

/* group */

/* field */
LegComplexEventScheduleGrp.prototype.legComplexEventScheduleStartDate = function () {
  return new LegComplexEventScheduleStartDate(this.message.tags[LegComplexEventScheduleStartDate.Tag]);
};

/* field */
LegComplexEventScheduleGrp.prototype.legComplexEventScheduleEndDate = function () {
  return new LegComplexEventScheduleEndDate(this.message.tags[LegComplexEventScheduleEndDate.Tag]);
};

/* field */
LegComplexEventScheduleGrp.prototype.legComplexEventScheduleFrequencyPeriod = function () {
  return new LegComplexEventScheduleFrequencyPeriod(this.message.tags[LegComplexEventScheduleFrequencyPeriod.Tag]);
};

/* field */
LegComplexEventScheduleGrp.prototype.legComplexEventScheduleFrequencyUnit = function () {
  return new LegComplexEventScheduleFrequencyUnit(this.message.tags[LegComplexEventScheduleFrequencyUnit.Tag]);
};

/* field */
LegComplexEventScheduleGrp.prototype.legComplexEventScheduleRollConvention = function () {
  return new LegComplexEventScheduleRollConvention(this.message.tags[LegComplexEventScheduleRollConvention.Tag]);
};

/* end group */

LegComplexEventScheduleGrp.Tag = '41400';

module.exports = LegComplexEventScheduleGrp;