var NoLegPaymentStreamPaymentDateBusinessCenters = require('../fields/NoLegPaymentStreamPaymentDateBusinessCenters');
var LegPaymentStreamPaymentDateBusinessCenter = require('../fields/LegPaymentStreamPaymentDateBusinessCenter');

function LegPaymentStreamPaymentDateBusinessCenterGrp (legPaymentStreamPaymentDateBusinessCenterGrp) {
  this.message = legPaymentStreamPaymentDateBusinessCenterGrp;
}

/* group */

/* field */
LegPaymentStreamPaymentDateBusinessCenterGrp.prototype.legPaymentStreamPaymentDateBusinessCenter = function () {
  return new LegPaymentStreamPaymentDateBusinessCenter(this.message.tags[LegPaymentStreamPaymentDateBusinessCenter.Tag]);
};

/* end group */

LegPaymentStreamPaymentDateBusinessCenterGrp.Tag = '40930';

module.exports = LegPaymentStreamPaymentDateBusinessCenterGrp;