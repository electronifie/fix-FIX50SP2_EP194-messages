var invert = require('invert-obj');

function UnderlyingProvisionOptionRelevantUnderlyingDateAdjusted (underlyingProvisionOptionRelevantUnderlyingDateAdjusted) {
  this.message = underlyingProvisionOptionRelevantUnderlyingDateAdjusted;
}

UnderlyingProvisionOptionRelevantUnderlyingDateAdjusted.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionRelevantUnderlyingDateAdjusted.Tag = '42148';

UnderlyingProvisionOptionRelevantUnderlyingDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingProvisionOptionRelevantUnderlyingDateAdjusted;