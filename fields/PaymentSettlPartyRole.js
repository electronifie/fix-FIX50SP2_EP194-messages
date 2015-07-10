var invert = require('invert-obj');

function PaymentSettlPartyRole (paymentSettlPartyRole) {
  this.message = paymentSettlPartyRole;
}

PaymentSettlPartyRole.prototype.value = function () {
  return this.message;
};

PaymentSettlPartyRole.Tag = '40236';

PaymentSettlPartyRole.Type = 'INT';

module.exports = PaymentSettlPartyRole;