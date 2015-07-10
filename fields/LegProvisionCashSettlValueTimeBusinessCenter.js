var invert = require('invert-obj');

function LegProvisionCashSettlValueTimeBusinessCenter (legProvisionCashSettlValueTimeBusinessCenter) {
  this.message = legProvisionCashSettlValueTimeBusinessCenter;
}

LegProvisionCashSettlValueTimeBusinessCenter.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlValueTimeBusinessCenter.Tag = '40525';

LegProvisionCashSettlValueTimeBusinessCenter.Type = 'STRING';

module.exports = LegProvisionCashSettlValueTimeBusinessCenter;