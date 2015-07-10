var NoStreamEffectiveBusinessCenters = require('../fields/NoStreamEffectiveBusinessCenters');
var StreamEffectiveDateBusinessCenter = require('../fields/StreamEffectiveDateBusinessCenter');

function StreamEffectiveBusinessCenterGrp (streamEffectiveBusinessCenterGrp) {
  this.message = streamEffectiveBusinessCenterGrp;
}

/* group */

/* field */
StreamEffectiveBusinessCenterGrp.prototype.streamEffectiveDateBusinessCenter = function () {
  return new StreamEffectiveDateBusinessCenter(this.message.tags[StreamEffectiveDateBusinessCenter.Tag]);
};

/* end group */

StreamEffectiveBusinessCenterGrp.Tag = '40960';

module.exports = StreamEffectiveBusinessCenterGrp;