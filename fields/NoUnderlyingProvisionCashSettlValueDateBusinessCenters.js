var invert = require('invert-obj');

function NoUnderlyingProvisionCashSettlValueDateBusinessCenters (noUnderlyingProvisionCashSettlValueDateBusinessCenters) {
  this.message = noUnderlyingProvisionCashSettlValueDateBusinessCenters;
}

NoUnderlyingProvisionCashSettlValueDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoUnderlyingProvisionCashSettlValueDateBusinessCenters.Tag = '42182';

NoUnderlyingProvisionCashSettlValueDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoUnderlyingProvisionCashSettlValueDateBusinessCenters;