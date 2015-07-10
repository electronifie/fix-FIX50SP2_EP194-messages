var invert = require('invert-obj');

function UnderlyingProvisionCashSettlValueDateBusinessCenter (underlyingProvisionCashSettlValueDateBusinessCenter) {
  this.message = underlyingProvisionCashSettlValueDateBusinessCenter;
}

UnderlyingProvisionCashSettlValueDateBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlValueDateBusinessCenter.Tag = '42183';

UnderlyingProvisionCashSettlValueDateBusinessCenter.Type = 'STRING';

module.exports = UnderlyingProvisionCashSettlValueDateBusinessCenter;