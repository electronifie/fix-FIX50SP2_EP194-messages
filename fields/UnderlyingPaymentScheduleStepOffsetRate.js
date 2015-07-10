var invert = require('invert-obj');

function UnderlyingPaymentScheduleStepOffsetRate (underlyingPaymentScheduleStepOffsetRate) {
  this.message = underlyingPaymentScheduleStepOffsetRate;
}

UnderlyingPaymentScheduleStepOffsetRate.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleStepOffsetRate.Tag = '40684';

UnderlyingPaymentScheduleStepOffsetRate.Type = 'PERCENTAGE';

module.exports = UnderlyingPaymentScheduleStepOffsetRate;