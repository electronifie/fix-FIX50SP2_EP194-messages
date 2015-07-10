var NoProvisionDateBusinessCenters = require('../fields/NoProvisionDateBusinessCenters');
var ProvisionDateBusinessCenter = require('../fields/ProvisionDateBusinessCenter');

function ProvisionDateBusinessCenterGrp (provisionDateBusinessCenterGrp) {
  this.message = provisionDateBusinessCenterGrp;
}

/* group */

/* field */
ProvisionDateBusinessCenterGrp.prototype.provisionDateBusinessCenter = function () {
  return new ProvisionDateBusinessCenter(this.message.tags[ProvisionDateBusinessCenter.Tag]);
};

/* end group */

ProvisionDateBusinessCenterGrp.Tag = '40957';

module.exports = ProvisionDateBusinessCenterGrp;