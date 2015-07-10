var NoUnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenters = require('../fields/NoUnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenters');
var UnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenter = require('../fields/UnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenter');

function UnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp (underlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp) {
  this.message = underlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp.prototype.underlyingProvisionOptionRelevantUnderlyingDateBusinessCenter = function () {
  return new UnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenter(this.message.tags[UnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenter.Tag]);
};

/* end group */

UnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp.Tag = '42188';

module.exports = UnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp;