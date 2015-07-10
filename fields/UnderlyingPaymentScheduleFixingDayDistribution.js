var invert = require('invert-obj');

function UnderlyingPaymentScheduleFixingDayDistribution (underlyingPaymentScheduleFixingDayDistribution) {
  this.message = underlyingPaymentScheduleFixingDayDistribution;
}

UnderlyingPaymentScheduleFixingDayDistribution.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleFixingDayDistribution.Tag = '41891';

UnderlyingPaymentScheduleFixingDayDistribution.Type = 'INT';

module.exports = UnderlyingPaymentScheduleFixingDayDistribution;