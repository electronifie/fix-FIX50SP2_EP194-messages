var invert = require('invert-obj');

function PaymentSettlPartySubIDType (paymentSettlPartySubIdtype) {
  this.message = paymentSettlPartySubIdtype;
}

PaymentSettlPartySubIDType.prototype.value = function () {
  return this.message;
};

PaymentSettlPartySubIDType.Tag = '40240';

PaymentSettlPartySubIDType.Type = 'INT';

module.exports = PaymentSettlPartySubIDType;