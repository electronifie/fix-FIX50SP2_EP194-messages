var invert = require('invert-obj');

function NoPaymentScheduleInterimExchangeDateBusinessCenters (noPaymentScheduleInterimExchangeDateBusinessCenters) {
  this.message = noPaymentScheduleInterimExchangeDateBusinessCenters;
}

NoPaymentScheduleInterimExchangeDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoPaymentScheduleInterimExchangeDateBusinessCenters.Tag = '40945';

NoPaymentScheduleInterimExchangeDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoPaymentScheduleInterimExchangeDateBusinessCenters;