var invert = require('invert-obj');

function UnderlyingPaymentStreamFirstPaymentDateUnadjusted (underlyingPaymentStreamFirstPaymentDateUnadjusted) {
  this.message = underlyingPaymentStreamFirstPaymentDateUnadjusted;
}

UnderlyingPaymentStreamFirstPaymentDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFirstPaymentDateUnadjusted.Tag = '40586';

UnderlyingPaymentStreamFirstPaymentDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingPaymentStreamFirstPaymentDateUnadjusted;