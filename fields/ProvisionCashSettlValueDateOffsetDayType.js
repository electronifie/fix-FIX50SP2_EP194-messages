var invert = require('invert-obj');

function ProvisionCashSettlValueDateOffsetDayType (provisionCashSettlValueDateOffsetDayType) {
  this.message = provisionCashSettlValueDateOffsetDayType;
}

ProvisionCashSettlValueDateOffsetDayType.prototype.value = function () {
  return this.message;
};

ProvisionCashSettlValueDateOffsetDayType.Tag = '40121';

ProvisionCashSettlValueDateOffsetDayType.Type = 'INT';

module.exports = ProvisionCashSettlValueDateOffsetDayType;