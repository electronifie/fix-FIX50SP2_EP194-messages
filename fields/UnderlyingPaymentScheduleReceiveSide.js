var invert = require('invert-obj');

function UnderlyingPaymentScheduleReceiveSide (underlyingPaymentScheduleReceiveSide) {
  this.message = underlyingPaymentScheduleReceiveSide;
}

UnderlyingPaymentScheduleReceiveSide.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleReceiveSide.Tag = '40670';

UnderlyingPaymentScheduleReceiveSide.Type = 'INT';

module.exports = UnderlyingPaymentScheduleReceiveSide;