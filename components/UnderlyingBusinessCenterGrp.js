var NoUnderlyingBusinessCenters = require('../fields/NoUnderlyingBusinessCenters');
var UnderlyingBusinessCenter = require('../fields/UnderlyingBusinessCenter');

function UnderlyingBusinessCenterGrp (underlyingBusinessCenterGrp) {
  this.message = underlyingBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingBusinessCenterGrp.prototype.underlyingBusinessCenter = function () {
  return new UnderlyingBusinessCenter(this.message.tags[UnderlyingBusinessCenter.Tag]);
};

/* end group */

UnderlyingBusinessCenterGrp.Tag = '40962';

module.exports = UnderlyingBusinessCenterGrp;