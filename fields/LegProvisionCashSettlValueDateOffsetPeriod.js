var invert = require('invert-obj');

function LegProvisionCashSettlValueDateOffsetPeriod (legProvisionCashSettlValueDateOffsetPeriod) {
  this.message = legProvisionCashSettlValueDateOffsetPeriod;
}

LegProvisionCashSettlValueDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlValueDateOffsetPeriod.Tag = '40529';

LegProvisionCashSettlValueDateOffsetPeriod.Type = 'INT';

module.exports = LegProvisionCashSettlValueDateOffsetPeriod;