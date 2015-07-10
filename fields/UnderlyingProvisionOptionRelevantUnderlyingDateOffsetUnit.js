var invert = require('invert-obj');

function UnderlyingProvisionOptionRelevantUnderlyingDateOffsetUnit (underlyingProvisionOptionRelevantUnderlyingDateOffsetUnit) {
  this.message = underlyingProvisionOptionRelevantUnderlyingDateOffsetUnit;
}

UnderlyingProvisionOptionRelevantUnderlyingDateOffsetUnit.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionRelevantUnderlyingDateOffsetUnit.Tag = '42146';

UnderlyingProvisionOptionRelevantUnderlyingDateOffsetUnit.Type = 'STRING';

module.exports = UnderlyingProvisionOptionRelevantUnderlyingDateOffsetUnit;