var invert = require('invert-obj');

function LegProvisionCashSettlValueDateBusinessDayConvention (legProvisionCashSettlValueDateBusinessDayConvention) {
  this.message = legProvisionCashSettlValueDateBusinessDayConvention;
}

LegProvisionCashSettlValueDateBusinessDayConvention.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlValueDateBusinessDayConvention.Tag = '40526';

LegProvisionCashSettlValueDateBusinessDayConvention.Type = 'INT';

module.exports = LegProvisionCashSettlValueDateBusinessDayConvention;