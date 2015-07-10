var NoLegPaymentStreamResetDateBusinessCenters = require('../fields/NoLegPaymentStreamResetDateBusinessCenters');
var LegPaymentStreamResetDateBusinessCenter = require('../fields/LegPaymentStreamResetDateBusinessCenter');

function LegPaymentStreamResetDateBusinessCenterGrp (legPaymentStreamResetDateBusinessCenterGrp) {
  this.message = legPaymentStreamResetDateBusinessCenterGrp;
}

/* group */

/* field */
LegPaymentStreamResetDateBusinessCenterGrp.prototype.legPaymentStreamResetDateBusinessCenter = function () {
  return new LegPaymentStreamResetDateBusinessCenter(this.message.tags[LegPaymentStreamResetDateBusinessCenter.Tag]);
};

/* end group */

LegPaymentStreamResetDateBusinessCenterGrp.Tag = '40931';

module.exports = LegPaymentStreamResetDateBusinessCenterGrp;