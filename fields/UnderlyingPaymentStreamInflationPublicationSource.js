var invert = require('invert-obj');

function UnderlyingPaymentStreamInflationPublicationSource (underlyingPaymentStreamInflationPublicationSource) {
  this.message = underlyingPaymentStreamInflationPublicationSource;
}

UnderlyingPaymentStreamInflationPublicationSource.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamInflationPublicationSource.Tag = '40644';

UnderlyingPaymentStreamInflationPublicationSource.Type = 'STRING';

module.exports = UnderlyingPaymentStreamInflationPublicationSource;