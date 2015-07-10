var invert = require('invert-obj');

function UnderlyingProvisionCashSettlValueTimeBusinessCenter (underlyingProvisionCashSettlValueTimeBusinessCenter) {
  this.message = underlyingProvisionCashSettlValueTimeBusinessCenter;
}

UnderlyingProvisionCashSettlValueTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlValueTimeBusinessCenter.Tag = '42105';

UnderlyingProvisionCashSettlValueTimeBusinessCenter.Type = 'STRING';

module.exports = UnderlyingProvisionCashSettlValueTimeBusinessCenter;