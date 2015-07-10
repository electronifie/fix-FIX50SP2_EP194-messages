var invert = require('invert-obj');

function LegProvisionOptionRelevantUnderlyingDateAdjusted (legProvisionOptionRelevantUnderlyingDateAdjusted) {
  this.message = legProvisionOptionRelevantUnderlyingDateAdjusted;
}

LegProvisionOptionRelevantUnderlyingDateAdjusted.prototype.value = function () {
  return this.message;
};

LegProvisionOptionRelevantUnderlyingDateAdjusted.Tag = '40515';

LegProvisionOptionRelevantUnderlyingDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = LegProvisionOptionRelevantUnderlyingDateAdjusted;