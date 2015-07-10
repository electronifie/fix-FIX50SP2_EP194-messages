var NoLegProvisionOptionExpirationDateBusinessCenters = require('../fields/NoLegProvisionOptionExpirationDateBusinessCenters');
var LegProvisionOptionExpirationDateBusinessCenter = require('../fields/LegProvisionOptionExpirationDateBusinessCenter');

function LegProvisionOptionExpirationDateBusinessCenterGrp (legProvisionOptionExpirationDateBusinessCenterGrp) {
  this.message = legProvisionOptionExpirationDateBusinessCenterGrp;
}

/* group */

/* field */
LegProvisionOptionExpirationDateBusinessCenterGrp.prototype.legProvisionOptionExpirationDateBusinessCenter = function () {
  return new LegProvisionOptionExpirationDateBusinessCenter(this.message.tags[LegProvisionOptionExpirationDateBusinessCenter.Tag]);
};

/* end group */

LegProvisionOptionExpirationDateBusinessCenterGrp.Tag = '40937';

module.exports = LegProvisionOptionExpirationDateBusinessCenterGrp;