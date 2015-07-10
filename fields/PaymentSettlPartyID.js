var invert = require('invert-obj');

function PaymentSettlPartyID (paymentSettlPartyId) {
  this.message = paymentSettlPartyId;
}

PaymentSettlPartyID.prototype.value = function () {
  return this.message;
};

PaymentSettlPartyID.Tag = '40234';

PaymentSettlPartyID.Type = 'STRING';

module.exports = PaymentSettlPartyID;