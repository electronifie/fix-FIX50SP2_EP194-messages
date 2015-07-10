var invert = require('invert-obj');

function ProvisionOptionRelevantUnderlyingDateUnadjusted (provisionOptionRelevantUnderlyingDateUnadjusted) {
  this.message = provisionOptionRelevantUnderlyingDateUnadjusted;
}

ProvisionOptionRelevantUnderlyingDateUnadjusted.prototype.value = function () {
  return this.message;
};

ProvisionOptionRelevantUnderlyingDateUnadjusted.Tag = '40155';

ProvisionOptionRelevantUnderlyingDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = ProvisionOptionRelevantUnderlyingDateUnadjusted;