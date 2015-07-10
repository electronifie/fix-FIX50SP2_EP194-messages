var invert = require('invert-obj');

function UnderlyingProvisionCashSettlValueTime (underlyingProvisionCashSettlValueTime) {
  this.message = underlyingProvisionCashSettlValueTime;
}

UnderlyingProvisionCashSettlValueTime.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlValueTime.Tag = '42104';

UnderlyingProvisionCashSettlValueTime.Type = 'LOCALMKTTIME';

module.exports = UnderlyingProvisionCashSettlValueTime;