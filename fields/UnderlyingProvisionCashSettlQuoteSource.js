var invert = require('invert-obj');

function UnderlyingProvisionCashSettlQuoteSource (underlyingProvisionCashSettlQuoteSource) {
  this.message = underlyingProvisionCashSettlQuoteSource;
}

UnderlyingProvisionCashSettlQuoteSource.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlQuoteSource.Tag = '42102';

UnderlyingProvisionCashSettlQuoteSource.Type = 'INT';

module.exports = UnderlyingProvisionCashSettlQuoteSource;