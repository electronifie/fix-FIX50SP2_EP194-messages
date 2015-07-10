var invert = require('invert-obj');

function UnderlyingPaymentScheduleFixingDateRelativeTo (underlyingPaymentScheduleFixingDateRelativeTo) {
  this.message = underlyingPaymentScheduleFixingDateRelativeTo;
}

UnderlyingPaymentScheduleFixingDateRelativeTo.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleFixingDateRelativeTo.Tag = '40688';

UnderlyingPaymentScheduleFixingDateRelativeTo.Type = 'INT';

module.exports = UnderlyingPaymentScheduleFixingDateRelativeTo;