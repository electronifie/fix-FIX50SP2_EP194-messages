var invert = require('invert-obj');

function LegPaymentStreamAccrualDays (legPaymentStreamAccrualDays) {
  this.message = legPaymentStreamAccrualDays;
}

LegPaymentStreamAccrualDays.prototype.value = function () {
  return this.message;
};

LegPaymentStreamAccrualDays.Tag = '40284';

LegPaymentStreamAccrualDays.Type = 'INT';

module.exports = LegPaymentStreamAccrualDays;