var NoLegComplexEventDateBusinessCenters = require('../fields/NoLegComplexEventDateBusinessCenters');
var LegComplexEventDateBusinessCenter = require('../fields/LegComplexEventDateBusinessCenter');

function LegComplexEventDateBusinessCenterGrp (legComplexEventDateBusinessCenterGrp) {
  this.message = legComplexEventDateBusinessCenterGrp;
}

/* group */

/* field */
LegComplexEventDateBusinessCenterGrp.prototype.legComplexEventDateBusinessCenter = function () {
  return new LegComplexEventDateBusinessCenter(this.message.tags[LegComplexEventDateBusinessCenter.Tag]);
};

/* end group */

LegComplexEventDateBusinessCenterGrp.Tag = '41387';

module.exports = LegComplexEventDateBusinessCenterGrp;