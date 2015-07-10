var NoComplexEventPeriodDateTimes = require('../fields/NoComplexEventPeriodDateTimes');
var ComplexEventPeriodDate = require('../fields/ComplexEventPeriodDate');
var ComplexEventPeriodTime = require('../fields/ComplexEventPeriodTime');

function ComplexEventPeriodDateGrp (complexEventPeriodDateGrp) {
  this.message = complexEventPeriodDateGrp;
}

/* group */

/* field */
ComplexEventPeriodDateGrp.prototype.complexEventPeriodDate = function () {
  return new ComplexEventPeriodDate(this.message.tags[ComplexEventPeriodDate.Tag]);
};

/* field */
ComplexEventPeriodDateGrp.prototype.complexEventPeriodTime = function () {
  return new ComplexEventPeriodTime(this.message.tags[ComplexEventPeriodTime.Tag]);
};

/* end group */

ComplexEventPeriodDateGrp.Tag = '41007';

module.exports = ComplexEventPeriodDateGrp;