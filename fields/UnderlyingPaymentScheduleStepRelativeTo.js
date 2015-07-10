var invert = require('invert-obj');

function UnderlyingPaymentScheduleStepRelativeTo (underlyingPaymentScheduleStepRelativeTo) {
  this.message = underlyingPaymentScheduleStepRelativeTo;
}

UnderlyingPaymentScheduleStepRelativeTo.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleStepRelativeTo.Tag = '40685';

UnderlyingPaymentScheduleStepRelativeTo.Type = 'INT';

module.exports = UnderlyingPaymentScheduleStepRelativeTo;