var invert = require('invert-obj');

function ProvisionCashSettlQuoteSource (provisionCashSettlQuoteSource) {
  this.message = provisionCashSettlQuoteSource;
}

ProvisionCashSettlQuoteSource.prototype.value = function () {
  return this.message;
};

ProvisionCashSettlQuoteSource.Tag = '40112';

ProvisionCashSettlQuoteSource.Type = 'INT';

module.exports = ProvisionCashSettlQuoteSource;