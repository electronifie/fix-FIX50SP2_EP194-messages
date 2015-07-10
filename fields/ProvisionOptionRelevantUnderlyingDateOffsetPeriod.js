var invert = require('invert-obj');

function ProvisionOptionRelevantUnderlyingDateOffsetPeriod (provisionOptionRelevantUnderlyingDateOffsetPeriod) {
  this.message = provisionOptionRelevantUnderlyingDateOffsetPeriod;
}

ProvisionOptionRelevantUnderlyingDateOffsetPeriod.prototype.value = function () {
  return this.message;
};

ProvisionOptionRelevantUnderlyingDateOffsetPeriod.Tag = '40159';

ProvisionOptionRelevantUnderlyingDateOffsetPeriod.Type = 'INT';

module.exports = ProvisionOptionRelevantUnderlyingDateOffsetPeriod;