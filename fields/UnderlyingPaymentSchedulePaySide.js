var invert = require('invert-obj');

function UnderlyingPaymentSchedulePaySide (underlyingPaymentSchedulePaySide) {
  this.message = underlyingPaymentSchedulePaySide;
}

UnderlyingPaymentSchedulePaySide.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentSchedulePaySide.Tag = '40669';

UnderlyingPaymentSchedulePaySide.Type = 'INT';

module.exports = UnderlyingPaymentSchedulePaySide;