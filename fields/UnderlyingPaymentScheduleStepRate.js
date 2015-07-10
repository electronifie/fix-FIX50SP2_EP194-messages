var invert = require('invert-obj');

function UnderlyingPaymentScheduleStepRate (underlyingPaymentScheduleStepRate) {
  this.message = underlyingPaymentScheduleStepRate;
}

UnderlyingPaymentScheduleStepRate.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleStepRate.Tag = '40683';

UnderlyingPaymentScheduleStepRate.Type = 'PERCENTAGE';

module.exports = UnderlyingPaymentScheduleStepRate;