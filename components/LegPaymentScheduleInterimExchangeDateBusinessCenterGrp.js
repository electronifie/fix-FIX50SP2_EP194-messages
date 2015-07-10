var NoLegPaymentScheduleInterimExchangeDateBusinessCenters = require('../fields/NoLegPaymentScheduleInterimExchangeDateBusinessCenters');
var LegPaymentScheduleInterimExchangeDatesBusinessCenter = require('../fields/LegPaymentScheduleInterimExchangeDatesBusinessCenter');

function LegPaymentScheduleInterimExchangeDateBusinessCenterGrp (legPaymentScheduleInterimExchangeDateBusinessCenterGrp) {
  this.message = legPaymentScheduleInterimExchangeDateBusinessCenterGrp;
}

/* group */

/* field */
LegPaymentScheduleInterimExchangeDateBusinessCenterGrp.prototype.legPaymentScheduleInterimExchangeDatesBusinessCenter = function () {
  return new LegPaymentScheduleInterimExchangeDatesBusinessCenter(this.message.tags[LegPaymentScheduleInterimExchangeDatesBusinessCenter.Tag]);
};

/* end group */

LegPaymentScheduleInterimExchangeDateBusinessCenterGrp.Tag = '40928';

module.exports = LegPaymentScheduleInterimExchangeDateBusinessCenterGrp;