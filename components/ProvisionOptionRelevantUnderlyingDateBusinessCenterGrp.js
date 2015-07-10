var NoProvisionOptionRelevantUnderlyingDateBusinessCenters = require('../fields/NoProvisionOptionRelevantUnderlyingDateBusinessCenters');
var ProvisionOptionRelevantUnderlyingDateBusinessCenter = require('../fields/ProvisionOptionRelevantUnderlyingDateBusinessCenter');

function ProvisionOptionRelevantUnderlyingDateBusinessCenterGrp (provisionOptionRelevantUnderlyingDateBusinessCenterGrp) {
  this.message = provisionOptionRelevantUnderlyingDateBusinessCenterGrp;
}

/* group */

/* field */
ProvisionOptionRelevantUnderlyingDateBusinessCenterGrp.prototype.provisionOptionRelevantUnderlyingDateBusinessCenter = function () {
  return new ProvisionOptionRelevantUnderlyingDateBusinessCenter(this.message.tags[ProvisionOptionRelevantUnderlyingDateBusinessCenter.Tag]);
};

/* end group */

ProvisionOptionRelevantUnderlyingDateBusinessCenterGrp.Tag = '40956';

module.exports = ProvisionOptionRelevantUnderlyingDateBusinessCenterGrp;