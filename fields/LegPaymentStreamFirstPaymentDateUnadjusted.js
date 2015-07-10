var invert = require('invert-obj');

function LegPaymentStreamFirstPaymentDateUnadjusted (legPaymentStreamFirstPaymentDateUnadjusted) {
  this.message = legPaymentStreamFirstPaymentDateUnadjusted;
}

LegPaymentStreamFirstPaymentDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFirstPaymentDateUnadjusted.Tag = '40297';

LegPaymentStreamFirstPaymentDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegPaymentStreamFirstPaymentDateUnadjusted;