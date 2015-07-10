var invert = require('invert-obj');

function ProvisionOptionRelevantUnderlyingDateOffsetUnit (provisionOptionRelevantUnderlyingDateOffsetUnit) {
  this.message = provisionOptionRelevantUnderlyingDateOffsetUnit;
}

ProvisionOptionRelevantUnderlyingDateOffsetUnit.prototype.value = function () {
  return this.message;
};

ProvisionOptionRelevantUnderlyingDateOffsetUnit.Tag = '40160';

ProvisionOptionRelevantUnderlyingDateOffsetUnit.Type = 'STRING';

module.exports = ProvisionOptionRelevantUnderlyingDateOffsetUnit;