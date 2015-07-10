var invert = require('invert-obj');

function NoPaymentStreamInitialFixingDateBusinessCenters (noPaymentStreamInitialFixingDateBusinessCenters) {
  this.message = noPaymentStreamInitialFixingDateBusinessCenters;
}

NoPaymentStreamInitialFixingDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoPaymentStreamInitialFixingDateBusinessCenters.Tag = '40949';

NoPaymentStreamInitialFixingDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoPaymentStreamInitialFixingDateBusinessCenters;