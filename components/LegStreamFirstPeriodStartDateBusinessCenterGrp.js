var NoLegStreamFirstPeriodStartDateBusinessCenters = require('../fields/NoLegStreamFirstPeriodStartDateBusinessCenters');
var LegStreamFirstPeriodStartDateBusinessCenter = require('../fields/LegStreamFirstPeriodStartDateBusinessCenter');

function LegStreamFirstPeriodStartDateBusinessCenterGrp (legStreamFirstPeriodStartDateBusinessCenterGrp) {
  this.message = legStreamFirstPeriodStartDateBusinessCenterGrp;
}

/* group */

/* field */
LegStreamFirstPeriodStartDateBusinessCenterGrp.prototype.legStreamFirstPeriodStartDateBusinessCenter = function () {
  return new LegStreamFirstPeriodStartDateBusinessCenter(this.message.tags[LegStreamFirstPeriodStartDateBusinessCenter.Tag]);
};

/* end group */

LegStreamFirstPeriodStartDateBusinessCenterGrp.Tag = '40941';

module.exports = LegStreamFirstPeriodStartDateBusinessCenterGrp;