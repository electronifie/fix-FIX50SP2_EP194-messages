var invert = require('invert-obj');

function UnderlyingPaymentScheduleWeight (underlyingPaymentScheduleWeight) {
  this.message = underlyingPaymentScheduleWeight;
}

UnderlyingPaymentScheduleWeight.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleWeight.Tag = '40687';

UnderlyingPaymentScheduleWeight.Type = 'FLOAT';

module.exports = UnderlyingPaymentScheduleWeight;