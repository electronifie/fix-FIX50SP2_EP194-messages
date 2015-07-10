var invert = require('invert-obj');

function UnderlyingProvisionCashSettlQuoteType (underlyingProvisionCashSettlQuoteType) {
  this.message = underlyingProvisionCashSettlQuoteType;
}

UnderlyingProvisionCashSettlQuoteType.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlQuoteType.Tag = '42169';

UnderlyingProvisionCashSettlQuoteType.Type = 'INT';

module.exports = UnderlyingProvisionCashSettlQuoteType;