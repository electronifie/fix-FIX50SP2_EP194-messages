var invert = require('invert-obj');

function UnderlyingPaymentScheduleFixedCurrency (underlyingPaymentScheduleFixedCurrency) {
  this.message = underlyingPaymentScheduleFixedCurrency;
}

UnderlyingPaymentScheduleFixedCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleFixedCurrency.Tag = '40679';

UnderlyingPaymentScheduleFixedCurrency.Type = 'CURRENCY';

module.exports = UnderlyingPaymentScheduleFixedCurrency;