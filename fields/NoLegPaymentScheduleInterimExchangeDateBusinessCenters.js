var invert = require('invert-obj');

function NoLegPaymentScheduleInterimExchangeDateBusinessCenters (noLegPaymentScheduleInterimExchangeDateBusinessCenters) {
  this.message = noLegPaymentScheduleInterimExchangeDateBusinessCenters;
}

NoLegPaymentScheduleInterimExchangeDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegPaymentScheduleInterimExchangeDateBusinessCenters.Tag = '40928';

NoLegPaymentScheduleInterimExchangeDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegPaymentScheduleInterimExchangeDateBusinessCenters;