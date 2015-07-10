var invert = require('invert-obj');

function UnderlyingPaymentScheduleFixingLagUnit (underlyingPaymentScheduleFixingLagUnit) {
  this.message = underlyingPaymentScheduleFixingLagUnit;
}

UnderlyingPaymentScheduleFixingLagUnit.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleFixingLagUnit.Tag = '41894';

UnderlyingPaymentScheduleFixingLagUnit.Type = 'STRING';

module.exports = UnderlyingPaymentScheduleFixingLagUnit;