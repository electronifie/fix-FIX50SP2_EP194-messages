var invert = require('invert-obj');

function UnderlyingPaymentScheduleNotional (underlyingPaymentScheduleNotional) {
  this.message = underlyingPaymentScheduleNotional;
}

UnderlyingPaymentScheduleNotional.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleNotional.Tag = '40671';

UnderlyingPaymentScheduleNotional.Type = 'AMT';

module.exports = UnderlyingPaymentScheduleNotional;