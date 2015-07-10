var invert = require('invert-obj');

function LegPaymentScheduleStepRelativeTo (legPaymentScheduleStepRelativeTo) {
  this.message = legPaymentScheduleStepRelativeTo;
}

LegPaymentScheduleStepRelativeTo.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleStepRelativeTo.Tag = '40395';

LegPaymentScheduleStepRelativeTo.Type = 'INT';

module.exports = LegPaymentScheduleStepRelativeTo;