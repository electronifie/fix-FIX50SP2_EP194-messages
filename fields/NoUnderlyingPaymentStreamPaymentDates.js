var invert = require('invert-obj');

function NoUnderlyingPaymentStreamPaymentDates (noUnderlyingPaymentStreamPaymentDates) {
  this.message = noUnderlyingPaymentStreamPaymentDates;
}

NoUnderlyingPaymentStreamPaymentDates.prototype.value = function () {
  return this.message;
};

NoUnderlyingPaymentStreamPaymentDates.Tag = '41937';

NoUnderlyingPaymentStreamPaymentDates.Type = 'NUMINGROUP';

module.exports = NoUnderlyingPaymentStreamPaymentDates;