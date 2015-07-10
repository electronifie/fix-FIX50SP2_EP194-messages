var invert = require('invert-obj');

function UnderlyingProvisionCashSettlValueDateRelativeTo (underlyingProvisionCashSettlValueDateRelativeTo) {
  this.message = underlyingProvisionCashSettlValueDateRelativeTo;
}

UnderlyingProvisionCashSettlValueDateRelativeTo.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlValueDateRelativeTo.Tag = '42107';

UnderlyingProvisionCashSettlValueDateRelativeTo.Type = 'INT';

module.exports = UnderlyingProvisionCashSettlValueDateRelativeTo;