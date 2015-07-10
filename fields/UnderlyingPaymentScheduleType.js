var invert = require('invert-obj');

function UnderlyingPaymentScheduleType (underlyingPaymentScheduleType) {
  this.message = underlyingPaymentScheduleType;
}

UnderlyingPaymentScheduleType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleType.Tag = '40665';

UnderlyingPaymentScheduleType.Type = 'INT';

module.exports = UnderlyingPaymentScheduleType;