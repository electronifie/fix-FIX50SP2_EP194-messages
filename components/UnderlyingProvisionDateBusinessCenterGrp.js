var NoUnderlyingProvisionDateBusinessCenters = require('../fields/NoUnderlyingProvisionDateBusinessCenters');
var UnderlyingProvisionDateBusinessCenter = require('../fields/UnderlyingProvisionDateBusinessCenter');

function UnderlyingProvisionDateBusinessCenterGrp (underlyingProvisionDateBusinessCenterGrp) {
  this.message = underlyingProvisionDateBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingProvisionDateBusinessCenterGrp.prototype.underlyingProvisionDateBusinessCenter = function () {
  return new UnderlyingProvisionDateBusinessCenter(this.message.tags[UnderlyingProvisionDateBusinessCenter.Tag]);
};

/* end group */

UnderlyingProvisionDateBusinessCenterGrp.Tag = '42190';

module.exports = UnderlyingProvisionDateBusinessCenterGrp;