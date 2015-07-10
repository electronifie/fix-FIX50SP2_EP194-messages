var invert = require('invert-obj');

function PaymentSettlPartySubID (paymentSettlPartySubId) {
  this.message = paymentSettlPartySubId;
}

PaymentSettlPartySubID.prototype.value = function () {
  return this.message;
};

PaymentSettlPartySubID.Tag = '40239';

PaymentSettlPartySubID.Type = 'STRING';

module.exports = PaymentSettlPartySubID;