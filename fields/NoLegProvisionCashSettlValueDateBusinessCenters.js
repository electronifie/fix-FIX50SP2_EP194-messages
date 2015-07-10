var invert = require('invert-obj');

function NoLegProvisionCashSettlValueDateBusinessCenters (noLegProvisionCashSettlValueDateBusinessCenters) {
  this.message = noLegProvisionCashSettlValueDateBusinessCenters;
}

NoLegProvisionCashSettlValueDateBusinessCenters.prototype.value = function () {
  return this.message;
};

NoLegProvisionCashSettlValueDateBusinessCenters.Tag = '40935';

NoLegProvisionCashSettlValueDateBusinessCenters.Type = 'NUMINGROUP';

module.exports = NoLegProvisionCashSettlValueDateBusinessCenters;