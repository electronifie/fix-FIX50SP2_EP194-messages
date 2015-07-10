var invert = require('invert-obj');

function PaymentScheduleFixingLagPeriod (paymentScheduleFixingLagPeriod) {
  this.message = paymentScheduleFixingLagPeriod;
}

PaymentScheduleFixingLagPeriod.prototype.value = function () {
  return this.message;
};

PaymentScheduleFixingLagPeriod.Tag = '41176';

PaymentScheduleFixingLagPeriod.Type = 'INT';

module.exports = PaymentScheduleFixingLagPeriod;