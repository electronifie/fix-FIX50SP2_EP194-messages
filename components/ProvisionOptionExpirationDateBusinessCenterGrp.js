var NoProvisionOptionExpirationDateBusinessCenters = require('../fields/NoProvisionOptionExpirationDateBusinessCenters');
var ProvisionOptionExpirationDateBusinessCenter = require('../fields/ProvisionOptionExpirationDateBusinessCenter');

function ProvisionOptionExpirationDateBusinessCenterGrp (provisionOptionExpirationDateBusinessCenterGrp) {
  this.message = provisionOptionExpirationDateBusinessCenterGrp;
}

/* group */

/* field */
ProvisionOptionExpirationDateBusinessCenterGrp.prototype.provisionOptionExpirationDateBusinessCenter = function () {
  return new ProvisionOptionExpirationDateBusinessCenter(this.message.tags[ProvisionOptionExpirationDateBusinessCenter.Tag]);
};

/* end group */

ProvisionOptionExpirationDateBusinessCenterGrp.Tag = '40955';

module.exports = ProvisionOptionExpirationDateBusinessCenterGrp;