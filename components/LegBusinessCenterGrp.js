var NoLegBusinessCenters = require('../fields/NoLegBusinessCenters');
var LegBusinessCenter = require('../fields/LegBusinessCenter');

function LegBusinessCenterGrp (legBusinessCenterGrp) {
  this.message = legBusinessCenterGrp;
}

/* group */

/* field */
LegBusinessCenterGrp.prototype.legBusinessCenter = function () {
  return new LegBusinessCenter(this.message.tags[LegBusinessCenter.Tag]);
};

/* end group */

LegBusinessCenterGrp.Tag = '40923';

module.exports = LegBusinessCenterGrp;