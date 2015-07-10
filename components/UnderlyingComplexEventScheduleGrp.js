var NoUnderlyingComplexEventSchedules = require('../fields/NoUnderlyingComplexEventSchedules');
var UnderlyingComplexEventScheduleStartDate = require('../fields/UnderlyingComplexEventScheduleStartDate');
var UnderlyingComplexEventScheduleEndDate = require('../fields/UnderlyingComplexEventScheduleEndDate');
var UnderlyingComplexEventScheduleFrequencyPeriod = require('../fields/UnderlyingComplexEventScheduleFrequencyPeriod');
var UnderlyingComplexEventScheduleFrequencyUnit = require('../fields/UnderlyingComplexEventScheduleFrequencyUnit');
var UnderlyingComplexEventScheduleRollConvention = require('../fields/UnderlyingComplexEventScheduleRollConvention');

function UnderlyingComplexEventScheduleGrp (underlyingComplexEventScheduleGrp) {
  this.message = underlyingComplexEventScheduleGrp;
}

/* group */

/* field */
UnderlyingComplexEventScheduleGrp.prototype.underlyingComplexEventScheduleStartDate = function () {
  return new UnderlyingComplexEventScheduleStartDate(this.message.tags[UnderlyingComplexEventScheduleStartDate.Tag]);
};

/* field */
UnderlyingComplexEventScheduleGrp.prototype.underlyingComplexEventScheduleEndDate = function () {
  return new UnderlyingComplexEventScheduleEndDate(this.message.tags[UnderlyingComplexEventScheduleEndDate.Tag]);
};

/* field */
UnderlyingComplexEventScheduleGrp.prototype.underlyingComplexEventScheduleFrequencyPeriod = function () {
  return new UnderlyingComplexEventScheduleFrequencyPeriod(this.message.tags[UnderlyingComplexEventScheduleFrequencyPeriod.Tag]);
};

/* field */
UnderlyingComplexEventScheduleGrp.prototype.underlyingComplexEventScheduleFrequencyUnit = function () {
  return new UnderlyingComplexEventScheduleFrequencyUnit(this.message.tags[UnderlyingComplexEventScheduleFrequencyUnit.Tag]);
};

/* field */
UnderlyingComplexEventScheduleGrp.prototype.underlyingComplexEventScheduleRollConvention = function () {
  return new UnderlyingComplexEventScheduleRollConvention(this.message.tags[UnderlyingComplexEventScheduleRollConvention.Tag]);
};

/* end group */

UnderlyingComplexEventScheduleGrp.Tag = '41750';

module.exports = UnderlyingComplexEventScheduleGrp;