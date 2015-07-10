var invert = require('invert-obj');

function LegPaymentScheduleType (legPaymentScheduleType) {
  this.message = legPaymentScheduleType;
}

LegPaymentScheduleType.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleType.Tag = '40375';

LegPaymentScheduleType.Type = 'INT';

module.exports = LegPaymentScheduleType;