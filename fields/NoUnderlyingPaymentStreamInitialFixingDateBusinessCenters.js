var invert = require('invert-obj');

function NoUnderlyingPaymentStreamInitialFixingDateBusinessCenters (noUnderlyingPaymentStreamInitialFixingDateBusinessCenters) {
  this.message = noUnderlyingPaymentStreamInitialFixingDateBusinessCenters;
}

NoUnderlyingPaymentStreamInitialFixingDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoUnderlyingPaymentStreamInitialFixingDateBusinessCenters.Tag = '40971';

NoUnderlyingPaymentStreamInitialFixingDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoUnderlyingPaymentStreamInitialFixingDateBusinessCenters;