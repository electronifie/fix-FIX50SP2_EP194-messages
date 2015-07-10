var invert = require('invert-obj');

function UnderlyingPaymentScheduleStepOffsetValue (underlyingPaymentScheduleStepOffsetValue) {
  this.message = underlyingPaymentScheduleStepOffsetValue;
}

UnderlyingPaymentScheduleStepOffsetValue.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleStepOffsetValue.Tag = '40682';

UnderlyingPaymentScheduleStepOffsetValue.Type = 'AMT';

module.exports = UnderlyingPaymentScheduleStepOffsetValue;