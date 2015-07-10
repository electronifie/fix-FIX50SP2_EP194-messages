var invert = require('invert-obj');

function LegProvisionOptionRelevantUnderlyingDateOffsetUnit (legProvisionOptionRelevantUnderlyingDateOffsetUnit) {
  this.message = legProvisionOptionRelevantUnderlyingDateOffsetUnit;
}

LegProvisionOptionRelevantUnderlyingDateOffsetUnit.prototype.value = function () {
  return this.message;
};

LegProvisionOptionRelevantUnderlyingDateOffsetUnit.Tag = '40513';

LegProvisionOptionRelevantUnderlyingDateOffsetUnit.Type = 'STRING';

module.exports = LegProvisionOptionRelevantUnderlyingDateOffsetUnit;