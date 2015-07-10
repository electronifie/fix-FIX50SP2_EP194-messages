var invert = require('invert-obj');

function LegProvisionOptionRelevantUnderlyingDateOffsetDayType (legProvisionOptionRelevantUnderlyingDateOffsetDayType) {
  this.message = legProvisionOptionRelevantUnderlyingDateOffsetDayType;
}

LegProvisionOptionRelevantUnderlyingDateOffsetDayType.prototype.value = function () {
  return this.message;
};

LegProvisionOptionRelevantUnderlyingDateOffsetDayType.Tag = '40514';

LegProvisionOptionRelevantUnderlyingDateOffsetDayType.Type = 'INT';

module.exports = LegProvisionOptionRelevantUnderlyingDateOffsetDayType;