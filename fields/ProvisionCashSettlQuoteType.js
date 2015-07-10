var invert = require('invert-obj');

function ProvisionCashSettlQuoteType (provisionCashSettlQuoteType) {
  this.message = provisionCashSettlQuoteType;
}

ProvisionCashSettlQuoteType.prototype.value = function () {
  return this.message;
};


ProvisionCashSettlQuoteType.Keys = {
  BID: '0',
  MID: '1',
  OFFER: '2',
  EXERCISING_PARTY_PAYS: '3',
};

ProvisionCashSettlQuoteType.Tag = '40111';

ProvisionCashSettlQuoteType.Type = 'INT';

ProvisionCashSettlQuoteType.Values = invert(ProvisionCashSettlQuoteType.Keys);

module.exports = ProvisionCashSettlQuoteType;