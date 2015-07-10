var invert = require('invert-obj');

function UnderlyingPaymentScheduleFixingLagPeriod (underlyingPaymentScheduleFixingLagPeriod) {
  this.message = underlyingPaymentScheduleFixingLagPeriod;
}

UnderlyingPaymentScheduleFixingLagPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleFixingLagPeriod.Tag = '41893';

UnderlyingPaymentScheduleFixingLagPeriod.Type = 'INT';

module.exports = UnderlyingPaymentScheduleFixingLagPeriod;