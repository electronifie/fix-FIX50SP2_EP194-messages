var invert = require('invert-obj');

function UnderlyingProvisionOptionRelevantUnderlyingDateUnadjusted (underlyingProvisionOptionRelevantUnderlyingDateUnadjusted) {
  this.message = underlyingProvisionOptionRelevantUnderlyingDateUnadjusted;
}

UnderlyingProvisionOptionRelevantUnderlyingDateUnadjusted.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionRelevantUnderlyingDateUnadjusted.Tag = '42142';

UnderlyingProvisionOptionRelevantUnderlyingDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = UnderlyingProvisionOptionRelevantUnderlyingDateUnadjusted;