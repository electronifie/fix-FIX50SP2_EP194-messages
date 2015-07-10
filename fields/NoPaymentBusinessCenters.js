var invert = require('invert-obj');

function NoPaymentBusinessCenters (noPaymentBusinessCenters) {
  this.message = noPaymentBusinessCenters;
}

NoPaymentBusinessCenters.prototype.value = function () {
  return this.message;
};

NoPaymentBusinessCenters.Tag = '40944';

NoPaymentBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoPaymentBusinessCenters;