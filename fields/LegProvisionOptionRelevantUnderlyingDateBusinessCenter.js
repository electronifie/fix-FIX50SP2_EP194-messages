var invert = require('invert-obj');

function LegProvisionOptionRelevantUnderlyingDateBusinessCenter (legProvisionOptionRelevantUnderlyingDateBusinessCenter) {
  this.message = legProvisionOptionRelevantUnderlyingDateBusinessCenter;
}

LegProvisionOptionRelevantUnderlyingDateBusinessCenter.prototype.value = function () {
  return this.message;
};

LegProvisionOptionRelevantUnderlyingDateBusinessCenter.Tag = '40510';

LegProvisionOptionRelevantUnderlyingDateBusinessCenter.Type = 'STRING';

module.exports = LegProvisionOptionRelevantUnderlyingDateBusinessCenter;