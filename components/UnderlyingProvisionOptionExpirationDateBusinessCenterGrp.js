var NoUnderlyingProvisionOptionExpirationDateBusinessCenters = require('../fields/NoUnderlyingProvisionOptionExpirationDateBusinessCenters');
var UnderlyingProvisionOptionExpirationDateBusinessCenter = require('../fields/UnderlyingProvisionOptionExpirationDateBusinessCenter');

function UnderlyingProvisionOptionExpirationDateBusinessCenterGrp (underlyingProvisionOptionExpirationDateBusinessCenterGrp) {
  this.message = underlyingProvisionOptionExpirationDateBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingProvisionOptionExpirationDateBusinessCenterGrp.prototype.underlyingProvisionOptionExpirationDateBusinessCenter = function () {
  return new UnderlyingProvisionOptionExpirationDateBusinessCenter(this.message.tags[UnderlyingProvisionOptionExpirationDateBusinessCenter.Tag]);
};

/* end group */

UnderlyingProvisionOptionExpirationDateBusinessCenterGrp.Tag = '42186';

module.exports = UnderlyingProvisionOptionExpirationDateBusinessCenterGrp;