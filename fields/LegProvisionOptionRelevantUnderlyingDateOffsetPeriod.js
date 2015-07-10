var invert = require('invert-obj');

function LegProvisionOptionRelevantUnderlyingDateOffsetPeriod (legProvisionOptionRelevantUnderlyingDateOffsetPeriod) {
  this.message = legProvisionOptionRelevantUnderlyingDateOffsetPeriod;
}

LegProvisionOptionRelevantUnderlyingDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

LegProvisionOptionRelevantUnderlyingDateOffsetPeriod.Tag = '40512';

LegProvisionOptionRelevantUnderlyingDateOffsetPeriod.Type = 'INT';

module.exports = LegProvisionOptionRelevantUnderlyingDateOffsetPeriod;