var NoLegPaymentScheduleFixingDateBusinessCenters = require('../fields/NoLegPaymentScheduleFixingDateBusinessCenters');
var LegPaymentScheduleFixingDateBusinessCenter = require('../fields/LegPaymentScheduleFixingDateBusinessCenter');

function LegPaymentScheduleFixingDateBusinessCenterGrp (legPaymentScheduleFixingDateBusinessCenterGrp) {
  this.message = legPaymentScheduleFixingDateBusinessCenterGrp;
}

/* group */

/* field */
LegPaymentScheduleFixingDateBusinessCenterGrp.prototype.legPaymentScheduleFixingDateBusinessCenter = function () {
  return new LegPaymentScheduleFixingDateBusinessCenter(this.message.tags[LegPaymentScheduleFixingDateBusinessCenter.Tag]);
};

/* end group */

LegPaymentScheduleFixingDateBusinessCenterGrp.Tag = '40927';

module.exports = LegPaymentScheduleFixingDateBusinessCenterGrp;