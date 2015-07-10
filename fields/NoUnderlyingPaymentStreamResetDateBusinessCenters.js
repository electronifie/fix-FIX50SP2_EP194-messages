var invert = require('invert-obj');

function NoUnderlyingPaymentStreamResetDateBusinessCenters (noUnderlyingPaymentStreamResetDateBusinessCenters) {
  this.message = noUnderlyingPaymentStreamResetDateBusinessCenters;
}

NoUnderlyingPaymentStreamResetDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoUnderlyingPaymentStreamResetDateBusinessCenters.Tag = '40970';

NoUnderlyingPaymentStreamResetDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoUnderlyingPaymentStreamResetDateBusinessCenters;