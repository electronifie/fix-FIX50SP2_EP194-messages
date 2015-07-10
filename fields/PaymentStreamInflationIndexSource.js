var invert = require('invert-obj');

function PaymentStreamInflationIndexSource (paymentStreamInflationIndexSource) {
  this.message = paymentStreamInflationIndexSource;
}

PaymentStreamInflationIndexSource.prototype.value = function () {
  return this.message;
};

PaymentStreamInflationIndexSource.Tag = '40812';

PaymentStreamInflationIndexSource.Type = 'INT';

module.exports = PaymentStreamInflationIndexSource;