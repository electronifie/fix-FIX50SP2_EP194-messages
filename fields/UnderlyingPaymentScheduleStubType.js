var invert = require('invert-obj');

function UnderlyingPaymentScheduleStubType (underlyingPaymentScheduleStubType) {
  this.message = underlyingPaymentScheduleStubType;
}

UnderlyingPaymentScheduleStubType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleStubType.Tag = '40666';

UnderlyingPaymentScheduleStubType.Type = 'INT';

module.exports = UnderlyingPaymentScheduleStubType;