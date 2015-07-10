var invert = require('invert-obj');

function LegProvisionCashSettlValueDateBusinessCenter (legProvisionCashSettlValueDateBusinessCenter) {
  this.message = legProvisionCashSettlValueDateBusinessCenter;
}

LegProvisionCashSettlValueDateBusinessCenter.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlValueDateBusinessCenter.Tag = '40527';

LegProvisionCashSettlValueDateBusinessCenter.Type = 'STRING';

module.exports = LegProvisionCashSettlValueDateBusinessCenter;