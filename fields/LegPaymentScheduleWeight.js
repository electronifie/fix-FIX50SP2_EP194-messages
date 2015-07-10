var invert = require('invert-obj');

function LegPaymentScheduleWeight (legPaymentScheduleWeight) {
  this.message = legPaymentScheduleWeight;
}

LegPaymentScheduleWeight.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleWeight.Tag = '40397';

LegPaymentScheduleWeight.Type = 'FLOAT';

module.exports = LegPaymentScheduleWeight;