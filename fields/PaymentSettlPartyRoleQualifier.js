var invert = require('invert-obj');

function PaymentSettlPartyRoleQualifier (paymentSettlPartyRoleQualifier) {
  this.message = paymentSettlPartyRoleQualifier;
}

PaymentSettlPartyRoleQualifier.prototype.value = function () {
  return this.message;
};

PaymentSettlPartyRoleQualifier.Tag = '40237';

PaymentSettlPartyRoleQualifier.Type = 'INT';

module.exports = PaymentSettlPartyRoleQualifier;