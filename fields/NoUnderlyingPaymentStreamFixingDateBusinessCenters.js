var invert = require('invert-obj');

function NoUnderlyingPaymentStreamFixingDateBusinessCenters (noUnderlyingPaymentStreamFixingDateBusinessCenters) {
  this.message = noUnderlyingPaymentStreamFixingDateBusinessCenters;
}

NoUnderlyingPaymentStreamFixingDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoUnderlyingPaymentStreamFixingDateBusinessCenters.Tag = '40972';

NoUnderlyingPaymentStreamFixingDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoUnderlyingPaymentStreamFixingDateBusinessCenters;