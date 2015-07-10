var NoLegPaymentStreamFixingDateBusinessCenters = require('../fields/NoLegPaymentStreamFixingDateBusinessCenters');
var LegPaymentStreamFixingDateBusinessCenter = require('../fields/LegPaymentStreamFixingDateBusinessCenter');

function LegPaymentStreamFixingDateBusinessCenterGrp (legPaymentStreamFixingDateBusinessCenterGrp) {
  this.message = legPaymentStreamFixingDateBusinessCenterGrp;
}

/* group */

/* field */
LegPaymentStreamFixingDateBusinessCenterGrp.prototype.legPaymentStreamFixingDateBusinessCenter = function () {
  return new LegPaymentStreamFixingDateBusinessCenter(this.message.tags[LegPaymentStreamFixingDateBusinessCenter.Tag]);
};

/* end group */

LegPaymentStreamFixingDateBusinessCenterGrp.Tag = '40933';

module.exports = LegPaymentStreamFixingDateBusinessCenterGrp;