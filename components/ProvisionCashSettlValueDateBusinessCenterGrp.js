var NoProvisionCashSettlValueDateBusinessCenters = require('../fields/NoProvisionCashSettlValueDateBusinessCenters');
var ProvisionCashSettlValueDateBusinessCenter = require('../fields/ProvisionCashSettlValueDateBusinessCenter');

function ProvisionCashSettlValueDateBusinessCenterGrp (provisionCashSettlValueDateBusinessCenterGrp) {
  this.message = provisionCashSettlValueDateBusinessCenterGrp;
}

/* group */

/* field */
ProvisionCashSettlValueDateBusinessCenterGrp.prototype.provisionCashSettlValueDateBusinessCenter = function () {
  return new ProvisionCashSettlValueDateBusinessCenter(this.message.tags[ProvisionCashSettlValueDateBusinessCenter.Tag]);
};

/* end group */

ProvisionCashSettlValueDateBusinessCenterGrp.Tag = '40953';

module.exports = ProvisionCashSettlValueDateBusinessCenterGrp;