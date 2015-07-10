var NoLegStreamTerminationDateBusinessCenters = require('../fields/NoLegStreamTerminationDateBusinessCenters');
var LegStreamTerminationDateBusinessCenter = require('../fields/LegStreamTerminationDateBusinessCenter');

function LegStreamTerminationDateBusinessCenterGrp (legStreamTerminationDateBusinessCenterGrp) {
  this.message = legStreamTerminationDateBusinessCenterGrp;
}

/* group */

/* field */
LegStreamTerminationDateBusinessCenterGrp.prototype.legStreamTerminationDateBusinessCenter = function () {
  return new LegStreamTerminationDateBusinessCenter(this.message.tags[LegStreamTerminationDateBusinessCenter.Tag]);
};

/* end group */

LegStreamTerminationDateBusinessCenterGrp.Tag = '40943';

module.exports = LegStreamTerminationDateBusinessCenterGrp;