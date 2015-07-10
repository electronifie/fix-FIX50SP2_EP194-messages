var invert = require('invert-obj');

function NoPaymentSettlPartySubIDs (noPaymentSettlPartySubIds) {
  this.message = noPaymentSettlPartySubIds;
}

NoPaymentSettlPartySubIDs.prototype.value = function () {
  return this.message;
};

NoPaymentSettlPartySubIDs.Tag = '40238';

NoPaymentSettlPartySubIDs.Type = 'NUMINGROUP';

module.exports = NoPaymentSettlPartySubIDs;