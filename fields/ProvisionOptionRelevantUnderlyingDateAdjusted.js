var invert = require('invert-obj');

function ProvisionOptionRelevantUnderlyingDateAdjusted (provisionOptionRelevantUnderlyingDateAdjusted) {
  this.message = provisionOptionRelevantUnderlyingDateAdjusted;
}

ProvisionOptionRelevantUnderlyingDateAdjusted.prototype.value = function () {
  return this.message;
};

ProvisionOptionRelevantUnderlyingDateAdjusted.Tag = '40162';

ProvisionOptionRelevantUnderlyingDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = ProvisionOptionRelevantUnderlyingDateAdjusted;