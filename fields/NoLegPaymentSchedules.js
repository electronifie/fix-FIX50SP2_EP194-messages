var invert = require('invert-obj');

function NoLegPaymentSchedules (noLegPaymentSchedules) {
  this.message = noLegPaymentSchedules;
}

NoLegPaymentSchedules.prototype.value = function () {
  return this.message;
};

NoLegPaymentSchedules.Tag = '40374';

NoLegPaymentSchedules.Type = 'NUMINGROUP';

module.exports = NoLegPaymentSchedules;