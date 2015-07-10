var invert = require('invert-obj');

function NoPaymentSettlPartyIDs (noPaymentSettlPartyIds) {
  this.message = noPaymentSettlPartyIds;
}

NoPaymentSettlPartyIDs.prototype.value = function () {
  return this.message;
};

NoPaymentSettlPartyIDs.Tag = '40233';

NoPaymentSettlPartyIDs.Type = 'NUMINGROUP';

module.exports = NoPaymentSettlPartyIDs;