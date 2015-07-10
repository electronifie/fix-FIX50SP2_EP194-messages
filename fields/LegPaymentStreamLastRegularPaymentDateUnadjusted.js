var invert = require('invert-obj');

function LegPaymentStreamLastRegularPaymentDateUnadjusted (legPaymentStreamLastRegularPaymentDateUnadjusted) {
  this.message = legPaymentStreamLastRegularPaymentDateUnadjusted;
}

LegPaymentStreamLastRegularPaymentDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegPaymentStreamLastRegularPaymentDateUnadjusted.Tag = '40298';

LegPaymentStreamLastRegularPaymentDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegPaymentStreamLastRegularPaymentDateUnadjusted;