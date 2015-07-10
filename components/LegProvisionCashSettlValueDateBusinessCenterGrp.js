var NoLegProvisionCashSettlValueDateBusinessCenters = require('../fields/NoLegProvisionCashSettlValueDateBusinessCenters');
var LegProvisionCashSettlValueDateBusinessCenter = require('../fields/LegProvisionCashSettlValueDateBusinessCenter');

function LegProvisionCashSettlValueDateBusinessCenterGrp (legProvisionCashSettlValueDateBusinessCenterGrp) {
  this.message = legProvisionCashSettlValueDateBusinessCenterGrp;
}

/* group */

/* field */
LegProvisionCashSettlValueDateBusinessCenterGrp.prototype.legProvisionCashSettlValueDateBusinessCenter = function () {
  return new LegProvisionCashSettlValueDateBusinessCenter(this.message.tags[LegProvisionCashSettlValueDateBusinessCenter.Tag]);
};

/* end group */

LegProvisionCashSettlValueDateBusinessCenterGrp.Tag = '40935';

module.exports = LegProvisionCashSettlValueDateBusinessCenterGrp;