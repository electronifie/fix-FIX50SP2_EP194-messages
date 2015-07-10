var invert = require('invert-obj');

function PaymentScheduleInterimExchangeDateAdjusted (paymentScheduleInterimExchangeDateAdjusted) {
  this.message = paymentScheduleInterimExchangeDateAdjusted;
}

PaymentScheduleInterimExchangeDateAdjusted.prototype.value = function () {
  return this.message;
};

PaymentScheduleInterimExchangeDateAdjusted.Tag = '40867';

PaymentScheduleInterimExchangeDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = PaymentScheduleInterimExchangeDateAdjusted;