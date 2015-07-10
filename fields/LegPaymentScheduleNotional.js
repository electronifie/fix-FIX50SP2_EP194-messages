var invert = require('invert-obj');

function LegPaymentScheduleNotional (legPaymentScheduleNotional) {
  this.message = legPaymentScheduleNotional;
}

LegPaymentScheduleNotional.prototype.value = function () {
  return this.message;
};

LegPaymentScheduleNotional.Tag = '40381';

LegPaymentScheduleNotional.Type = 'AMT';

module.exports = LegPaymentScheduleNotional;