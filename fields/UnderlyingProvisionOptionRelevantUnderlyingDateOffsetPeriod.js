var invert = require('invert-obj');

function UnderlyingProvisionOptionRelevantUnderlyingDateOffsetPeriod (underlyingProvisionOptionRelevantUnderlyingDateOffsetPeriod) {
  this.message = underlyingProvisionOptionRelevantUnderlyingDateOffsetPeriod;
}

UnderlyingProvisionOptionRelevantUnderlyingDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionRelevantUnderlyingDateOffsetPeriod.Tag = '42145';

UnderlyingProvisionOptionRelevantUnderlyingDateOffsetPeriod.Type = 'INT';

module.exports = UnderlyingProvisionOptionRelevantUnderlyingDateOffsetPeriod;