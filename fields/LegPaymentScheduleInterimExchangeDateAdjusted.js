var invert = require('invert-obj');

function LegPaymentScheduleInterimExchangeDateAdjusted (legPaymentScheduleInterimExchangeDateAdjusted) {
  this.message = legPaymentScheduleInterimExchangeDateAdjusted;
}

LegPaymentScheduleInterimExchangeDateAdjusted.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleInterimExchangeDateAdjusted.Tag = '40413';

LegPaymentScheduleInterimExchangeDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = LegPaymentScheduleInterimExchangeDateAdjusted;