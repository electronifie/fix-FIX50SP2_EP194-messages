var invert = require('invert-obj');

function LegPaymentScheduleStubType (legPaymentScheduleStubType) {
  this.message = legPaymentScheduleStubType;
}

LegPaymentScheduleStubType.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleStubType.Tag = '40376';

LegPaymentScheduleStubType.Type = 'INT';

module.exports = LegPaymentScheduleStubType;