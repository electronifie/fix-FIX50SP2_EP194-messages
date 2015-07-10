var NoUnderlyingPaymentScheduleInterimExchangeDateBusinessCenters = require('../fields/NoUnderlyingPaymentScheduleInterimExchangeDateBusinessCenters');
var UnderlyingPaymentScheduleInterimExchangeDatesBusinessCenter = require('../fields/UnderlyingPaymentScheduleInterimExchangeDatesBusinessCenter');

function UnderlyingPaymentScheduleInterimExchangeDateBusinessCenterGrp (underlyingPaymentScheduleInterimExchangeDateBusinessCenterGrp) {
  this.message = underlyingPaymentScheduleInterimExchangeDateBusinessCenterGrp;
}

/* group */

/* field */
UnderlyingPaymentScheduleInterimExchangeDateBusinessCenterGrp.prototype.underlyingPaymentScheduleInterimExchangeDatesBusinessCenter = function () {
  return new UnderlyingPaymentScheduleInterimExchangeDatesBusinessCenter(this.message.tags[UnderlyingPaymentScheduleInterimExchangeDatesBusinessCenter.Tag]);
};

/* end group */

UnderlyingPaymentScheduleInterimExchangeDateBusinessCenterGrp.Tag = '40967';

module.exports = UnderlyingPaymentScheduleInterimExchangeDateBusinessCenterGrp;