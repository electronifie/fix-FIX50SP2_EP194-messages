var invert = require('invert-obj');

function LegProvisionCashSettlValueDateOffsetDayType (legProvisionCashSettlValueDateOffsetDayType) {
  this.message = legProvisionCashSettlValueDateOffsetDayType;
}

LegProvisionCashSettlValueDateOffsetDayType.prototype.value = function () {
  return this.message;
};

LegProvisionCashSettlValueDateOffsetDayType.Tag = '40531';

LegProvisionCashSettlValueDateOffsetDayType.Type = 'INT';

module.exports = LegProvisionCashSettlValueDateOffsetDayType;