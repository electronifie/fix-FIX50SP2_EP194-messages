var invert = require('invert-obj');

function LegPaymentStreamResetWeeklyRollConvention (legPaymentStreamResetWeeklyRollConvention) {
  this.message = legPaymentStreamResetWeeklyRollConvention;
}

LegPaymentStreamResetWeeklyRollConvention.prototype.value = function () {
  return this.message;
};

LegPaymentStreamResetWeeklyRollConvention.Tag = '40308';

LegPaymentStreamResetWeeklyRollConvention.Type = 'STRING';

module.exports = LegPaymentStreamResetWeeklyRollConvention;