var invert = require('invert-obj');

function NoPaymentStreamFixingDateBusinessCenters (noPaymentStreamFixingDateBusinessCenters) {
  this.message = noPaymentStreamFixingDateBusinessCenters;
}

NoPaymentStreamFixingDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoPaymentStreamFixingDateBusinessCenters.Tag = '40950';

NoPaymentStreamFixingDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoPaymentStreamFixingDateBusinessCenters;