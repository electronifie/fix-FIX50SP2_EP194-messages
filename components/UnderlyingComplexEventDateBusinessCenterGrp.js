var NoUnderlyingComplexEventDateBusinessCenters = require('../fields/NoUnderlyingComplexEventDateBusinessCenters');
var UnderlyingComplexEventDateBusinessCenter = require('../fields/UnderlyingComplexEventDateBusinessCenter');

function UnderlyingComplexEventDateBusinessCenterGrp (underlyingComplexEventDateBusinessCenterGrp) {
  this.message = underlyingComplexEventDateBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingComplexEventDateBusinessCenterGrp.prototype.underlyingComplexEventDateBusinessCenter = function () {
  return new UnderlyingComplexEventDateBusinessCenter(this.message.tags[UnderlyingComplexEventDateBusinessCenter.Tag]);
};

/* end group */

UnderlyingComplexEventDateBusinessCenterGrp.Tag = '41737';

module.exports = UnderlyingComplexEventDateBusinessCenterGrp;