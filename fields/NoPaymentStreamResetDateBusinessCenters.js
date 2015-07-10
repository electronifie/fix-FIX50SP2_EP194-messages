var invert = require('invert-obj');

function NoPaymentStreamResetDateBusinessCenters (noPaymentStreamResetDateBusinessCenters) {
  this.message = noPaymentStreamResetDateBusinessCenters;
}

NoPaymentStreamResetDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoPaymentStreamResetDateBusinessCenters.Tag = '40948';

NoPaymentStreamResetDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoPaymentStreamResetDateBusinessCenters;