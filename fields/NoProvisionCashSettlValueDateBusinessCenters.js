var invert = require('invert-obj');

function NoProvisionCashSettlValueDateBusinessCenters (noProvisionCashSettlValueDateBusinessCenters) {
  this.message = noProvisionCashSettlValueDateBusinessCenters;
}

NoProvisionCashSettlValueDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoProvisionCashSettlValueDateBusinessCenters.Tag = '40953';

NoProvisionCashSettlValueDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoProvisionCashSettlValueDateBusinessCenters;