var invert = require('invert-obj');

function UnderlyingPaymentScheduleRate (underlyingPaymentScheduleRate) {
  this.message = underlyingPaymentScheduleRate;
}

UnderlyingPaymentScheduleRate.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleRate.Tag = '40673';

UnderlyingPaymentScheduleRate.Type = 'PERCENTAGE';

module.exports = UnderlyingPaymentScheduleRate;