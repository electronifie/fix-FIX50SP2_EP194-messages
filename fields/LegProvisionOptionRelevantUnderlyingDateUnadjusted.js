var invert = require('invert-obj');

function LegProvisionOptionRelevantUnderlyingDateUnadjusted (legProvisionOptionRelevantUnderlyingDateUnadjusted) {
  this.message = legProvisionOptionRelevantUnderlyingDateUnadjusted;
}

LegProvisionOptionRelevantUnderlyingDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegProvisionOptionRelevantUnderlyingDateUnadjusted.Tag = '40508';

LegProvisionOptionRelevantUnderlyingDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegProvisionOptionRelevantUnderlyingDateUnadjusted;