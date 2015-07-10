var invert = require('invert-obj');

function NoPaymentStreamPaymentDateBusinessCenters (noPaymentStreamPaymentDateBusinessCenters) {
  this.message = noPaymentStreamPaymentDateBusinessCenters;
}

NoPaymentStreamPaymentDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoPaymentStreamPaymentDateBusinessCenters.Tag = '40947';

NoPaymentStreamPaymentDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoPaymentStreamPaymentDateBusinessCenters;