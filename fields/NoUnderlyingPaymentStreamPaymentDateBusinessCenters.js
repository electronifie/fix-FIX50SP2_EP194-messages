var invert = require('invert-obj');

function NoUnderlyingPaymentStreamPaymentDateBusinessCenters (noUnderlyingPaymentStreamPaymentDateBusinessCenters) {
  this.message = noUnderlyingPaymentStreamPaymentDateBusinessCenters;
}

NoUnderlyingPaymentStreamPaymentDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoUnderlyingPaymentStreamPaymentDateBusinessCenters.Tag = '40969';

NoUnderlyingPaymentStreamPaymentDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoUnderlyingPaymentStreamPaymentDateBusinessCenters;