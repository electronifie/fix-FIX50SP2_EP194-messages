var invert = require('invert-obj');

function ProvisionOptionRelevantUnderlyingDateOffsetDayType (provisionOptionRelevantUnderlyingDateOffsetDayType) {
  this.message = provisionOptionRelevantUnderlyingDateOffsetDayType;
}

ProvisionOptionRelevantUnderlyingDateOffsetDayType.prototype.value = function () {
  return this.message;
};

ProvisionOptionRelevantUnderlyingDateOffsetDayType.Tag = '40161';

ProvisionOptionRelevantUnderlyingDateOffsetDayType.Type = 'INT';

module.exports = ProvisionOptionRelevantUnderlyingDateOffsetDayType;