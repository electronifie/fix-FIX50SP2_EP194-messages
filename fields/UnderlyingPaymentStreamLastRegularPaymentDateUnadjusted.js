var invert = require('invert-obj');

function UnderlyingPaymentStreamLastRegularPaymentDateUnadjusted (underlyingPaymentStreamLastRegularPaymentDateUnadjusted) {
  this.message = underlyingPaymentStreamLastRegularPaymentDateUnadjusted;
}

UnderlyingPaymentStreamLastRegularPaymentDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamLastRegularPaymentDateUnadjusted.Tag = '40587';

UnderlyingPaymentStreamLastRegularPaymentDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingPaymentStreamLastRegularPaymentDateUnadjusted;