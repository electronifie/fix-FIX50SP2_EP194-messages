var NoLegStreamEffectiveDateBusinessCenters = require('../fields/NoLegStreamEffectiveDateBusinessCenters');
var LegStreamEffectiveDateBusinessCenter = require('../fields/LegStreamEffectiveDateBusinessCenter');

function LegStreamEffectiveDateBusinessCenterGrp (legStreamEffectiveDateBusinessCenterGrp) {
  this.message = legStreamEffectiveDateBusinessCenterGrp;
}

/* group */

/* field */
LegStreamEffectiveDateBusinessCenterGrp.prototype.legStreamEffectiveDateBusinessCenter = function () {
  return new LegStreamEffectiveDateBusinessCenter(this.message.tags[LegStreamEffectiveDateBusinessCenter.Tag]);
};

/* end group */

LegStreamEffectiveDateBusinessCenterGrp.Tag = '40942';

module.exports = LegStreamEffectiveDateBusinessCenterGrp;