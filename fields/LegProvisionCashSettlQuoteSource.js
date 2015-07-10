var invert = require('invert-obj');

function LegProvisionCashSettlQuoteSource (legProvisionCashSettlQuoteSource) {
  this.message = legProvisionCashSettlQuoteSource;
}

LegProvisionCashSettlQuoteSource.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlQuoteSource.Tag = '40470';

LegProvisionCashSettlQuoteSource.Type = 'INT';

module.exports = LegProvisionCashSettlQuoteSource;