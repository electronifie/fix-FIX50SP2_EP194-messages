var NoLegPaymentStreamInitialFixingDateBusinessCenters = require('../fields/NoLegPaymentStreamInitialFixingDateBusinessCenters');
var LegPaymentStreamInitialFixingDateBusinessCenter = require('../fields/LegPaymentStreamInitialFixingDateBusinessCenter');

function LegPaymentStreamInitialFixingDateBusinessCenterGrp (legPaymentStreamInitialFixingDateBusinessCenterGrp) {
  this.message = legPaymentStreamInitialFixingDateBusinessCenterGrp;
}

/* group */

/* field */
LegPaymentStreamInitialFixingDateBusinessCenterGrp.prototype.legPaymentStreamInitialFixingDateBusinessCenter = function () {
  return new LegPaymentStreamInitialFixingDateBusinessCenter(this.message.tags[LegPaymentStreamInitialFixingDateBusinessCenter.Tag]);
};

/* end group */

LegPaymentStreamInitialFixingDateBusinessCenterGrp.Tag = '40932';

module.exports = LegPaymentStreamInitialFixingDateBusinessCenterGrp;