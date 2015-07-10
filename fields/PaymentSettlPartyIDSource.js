var invert = require('invert-obj');

function PaymentSettlPartyIDSource (paymentSettlPartyIdsource) {
  this.message = paymentSettlPartyIdsource;
}

PaymentSettlPartyIDSource.prototype.value = function () {
  return this.message;
};

PaymentSettlPartyIDSource.Tag = '40235';

PaymentSettlPartyIDSource.Type = 'CHAR';

module.exports = PaymentSettlPartyIDSource;