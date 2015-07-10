var invert = require('invert-obj');

function PaymentStreamInflationPublicationSource (paymentStreamInflationPublicationSource) {
  this.message = paymentStreamInflationPublicationSource;
}

PaymentStreamInflationPublicationSource.prototype.value = function () {
  return this.message;
};

PaymentStreamInflationPublicationSource.Tag = '40813';

PaymentStreamInflationPublicationSource.Type = 'STRING';

module.exports = PaymentStreamInflationPublicationSource;