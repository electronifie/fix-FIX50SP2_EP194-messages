var invert = require('invert-obj');

function PaymentScheduleFixingDayDistribution (paymentScheduleFixingDayDistribution) {
  this.message = paymentScheduleFixingDayDistribution;
}

PaymentScheduleFixingDayDistribution.prototype.value = function () {
  return this.message;
};

PaymentScheduleFixingDayDistribution.Tag = '41174';

PaymentScheduleFixingDayDistribution.Type = 'INT';

module.exports = PaymentScheduleFixingDayDistribution;