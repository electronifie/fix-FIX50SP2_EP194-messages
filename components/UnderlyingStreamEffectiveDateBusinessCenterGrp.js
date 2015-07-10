var NoUnderlyingStreamEffectiveDateBusinessCenters = require('../fields/NoUnderlyingStreamEffectiveDateBusinessCenters');
var UnderlyingStreamEffectiveDateBusinessCenter = require('../fields/UnderlyingStreamEffectiveDateBusinessCenter');

function UnderlyingStreamEffectiveDateBusinessCenterGrp (underlyingStreamEffectiveDateBusinessCenterGrp) {
  this.message = underlyingStreamEffectiveDateBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingStreamEffectiveDateBusinessCenterGrp.prototype.underlyingStreamEffectiveDateBusinessCenter = function () {
  return new UnderlyingStreamEffectiveDateBusinessCenter(this.message.tags[UnderlyingStreamEffectiveDateBusinessCenter.Tag]);
};

/* end group */

UnderlyingStreamEffectiveDateBusinessCenterGrp.Tag = '40975';

module.exports = UnderlyingStreamEffectiveDateBusinessCenterGrp;