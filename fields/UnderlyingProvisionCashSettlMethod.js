var invert = require('invert-obj');

function UnderlyingProvisionCashSettlMethod (underlyingProvisionCashSettlMethod) {
  this.message = underlyingProvisionCashSettlMethod;
}

UnderlyingProvisionCashSettlMethod.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlMethod.Tag = '42166';

UnderlyingProvisionCashSettlMethod.Type = 'INT';

module.exports = UnderlyingProvisionCashSettlMethod;