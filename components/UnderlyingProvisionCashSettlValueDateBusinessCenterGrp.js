var NoUnderlyingProvisionCashSettlValueDateBusinessCenters = require('../fields/NoUnderlyingProvisionCashSettlValueDateBusinessCenters');
var UnderlyingProvisionCashSettlValueDateBusinessCenter = require('../fields/UnderlyingProvisionCashSettlValueDateBusinessCenter');

function UnderlyingProvisionCashSettlValueDateBusinessCenterGrp (underlyingProvisionCashSettlValueDateBusinessCenterGrp) {
  this.message = underlyingProvisionCashSettlValueDateBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingProvisionCashSettlValueDateBusinessCenterGrp.prototype.underlyingProvisionCashSettlValueDateBusinessCenter = function () {
  return new UnderlyingProvisionCashSettlValueDateBusinessCenter(this.message.tags[UnderlyingProvisionCashSettlValueDateBusinessCenter.Tag]);
};

/* end group */

UnderlyingProvisionCashSettlValueDateBusinessCenterGrp.Tag = '42182';

module.exports = UnderlyingProvisionCashSettlValueDateBusinessCenterGrp;