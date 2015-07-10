var NoComplexEventSchedules = require('../fields/NoComplexEventSchedules');
var ComplexEventScheduleStartDate = require('../fields/ComplexEventScheduleStartDate');
var ComplexEventScheduleEndDate = require('../fields/ComplexEventScheduleEndDate');
var ComplexEventScheduleFrequencyPeriod = require('../fields/ComplexEventScheduleFrequencyPeriod');
var ComplexEventScheduleFrequencyUnit = require('../fields/ComplexEventScheduleFrequencyUnit');
var ComplexEventScheduleRollConvention = require('../fields/ComplexEventScheduleRollConvention');

function ComplexEventScheduleGrp (complexEventScheduleGrp) {
  this.message = complexEventScheduleGrp;
}

/* group */

/* field */
ComplexEventScheduleGrp.prototype.complexEventScheduleStartDate = function () {
  return new ComplexEventScheduleStartDate(this.message.tags[ComplexEventScheduleStartDate.Tag]);
};

/* field */
ComplexEventScheduleGrp.prototype.complexEventScheduleEndDate = function () {
  return new ComplexEventScheduleEndDate(this.message.tags[ComplexEventScheduleEndDate.Tag]);
};

/* field */
ComplexEventScheduleGrp.prototype.complexEventScheduleFrequencyPeriod = function () {
  return new ComplexEventScheduleFrequencyPeriod(this.message.tags[ComplexEventScheduleFrequencyPeriod.Tag]);
};

/* field */
ComplexEventScheduleGrp.prototype.complexEventScheduleFrequencyUnit = function () {
  return new ComplexEventScheduleFrequencyUnit(this.message.tags[ComplexEventScheduleFrequencyUnit.Tag]);
};

/* field */
ComplexEventScheduleGrp.prototype.complexEventScheduleRollConvention = function () {
  return new ComplexEventScheduleRollConvention(this.message.tags[ComplexEventScheduleRollConvention.Tag]);
};

/* end group */

ComplexEventScheduleGrp.Tag = '41031';

module.exports = ComplexEventScheduleGrp;