var invert = require('invert-obj');

function UnderlyingProvisionCashSettlValueDateOffsetDayType (underlyingProvisionCashSettlValueDateOffsetDayType) {
  this.message = underlyingProvisionCashSettlValueDateOffsetDayType;
}

UnderlyingProvisionCashSettlValueDateOffsetDayType.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionCashSettlValueDateOffsetDayType.Tag = '42110';

UnderlyingProvisionCashSettlValueDateOffsetDayType.Type = 'INT';

module.exports = UnderlyingProvisionCashSettlValueDateOffsetDayType;