var invert = require('invert-obj');

function LegPaymentScheduleStepOffsetValue (legPaymentScheduleStepOffsetValue) {
  this.message = legPaymentScheduleStepOffsetValue;
}

LegPaymentScheduleStepOffsetValue.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleStepOffsetValue.Tag = '40392';

LegPaymentScheduleStepOffsetValue.Type = 'AMT';

module.exports = LegPaymentScheduleStepOffsetValue;