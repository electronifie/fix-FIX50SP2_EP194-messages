var invert = require('invert-obj');

function UnderlyingPaymentStreamResetWeeklyRollConvention (underlyingPaymentStreamResetWeeklyRollConvention) {
  this.message = underlyingPaymentStreamResetWeeklyRollConvention;
}

UnderlyingPaymentStreamResetWeeklyRollConvention.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamResetWeeklyRollConvention.Tag = '40597';

UnderlyingPaymentStreamResetWeeklyRollConvention.Type = 'STRING';

module.exports = UnderlyingPaymentStreamResetWeeklyRollConvention;