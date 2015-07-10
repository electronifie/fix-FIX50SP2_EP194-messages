var NoLegStreamCalculationPeriodBusinessCenters = require('../fields/NoLegStreamCalculationPeriodBusinessCenters');
var LegStreamCalculationPeriodBusinessCenter = require('../fields/LegStreamCalculationPeriodBusinessCenter');

function LegStreamCalculationPeriodBusinessCenterGrp (legStreamCalculationPeriodBusinessCenterGrp) {
  this.message = legStreamCalculationPeriodBusinessCenterGrp;
}

/* group */

/* field */
LegStreamCalculationPeriodBusinessCenterGrp.prototype.legStreamCalculationPeriodBusinessCenter = function () {
  return new LegStreamCalculationPeriodBusinessCenter(this.message.tags[LegStreamCalculationPeriodBusinessCenter.Tag]);
};

/* end group */

LegStreamCalculationPeriodBusinessCenterGrp.Tag = '40940';

module.exports = LegStreamCalculationPeriodBusinessCenterGrp;