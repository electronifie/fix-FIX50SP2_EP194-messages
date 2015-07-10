var invert = require('invert-obj');

function UnderlyingPaymentScheduleInterimExchangeDateAdjusted (underlyingPaymentScheduleInterimExchangeDateAdjusted) {
  this.message = underlyingPaymentScheduleInterimExchangeDateAdjusted;
}

UnderlyingPaymentScheduleInterimExchangeDateAdjusted.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentScheduleInterimExchangeDateAdjusted.Tag = '40703';

UnderlyingPaymentScheduleInterimExchangeDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingPaymentScheduleInterimExchangeDateAdjusted;