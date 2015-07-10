var NoLegStreamCalculationPeriodDates = require('../fields/NoLegStreamCalculationPeriodDates');
var LegStreamCalculationPeriodDate = require('../fields/LegStreamCalculationPeriodDate');
var LegStreamCalculationPeriodDateType = require('../fields/LegStreamCalculationPeriodDateType');

function LegStreamCalculationPeriodDateGrp (legStreamCalculationPeriodDateGrp) {
  this.message = legStreamCalculationPeriodDateGrp;
}

/* group */

/* field */
LegStreamCalculationPeriodDateGrp.prototype.legStreamCalculationPeriodDate = function () {
  return new LegStreamCalculationPeriodDate(this.message.tags[LegStreamCalculationPeriodDate.Tag]);
};

/* field */
LegStreamCalculationPeriodDateGrp.prototype.legStreamCalculationPeriodDateType = function () {
  return new LegStreamCalculationPeriodDateType(this.message.tags[LegStreamCalculationPeriodDateType.Tag]);
};

/* end group */

LegStreamCalculationPeriodDateGrp.Tag = '41638';

module.exports = LegStreamCalculationPeriodDateGrp;