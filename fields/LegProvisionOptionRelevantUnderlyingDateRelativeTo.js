var invert = require('invert-obj');

function LegProvisionOptionRelevantUnderlyingDateRelativeTo (legProvisionOptionRelevantUnderlyingDateRelativeTo) {
  this.message = legProvisionOptionRelevantUnderlyingDateRelativeTo;
}

LegProvisionOptionRelevantUnderlyingDateRelativeTo.prototype.value = function () {
  return this.message;
};

LegProvisionOptionRelevantUnderlyingDateRelativeTo.Tag = '40511';

LegProvisionOptionRelevantUnderlyingDateRelativeTo.Type = 'INT';

module.exports = LegProvisionOptionRelevantUnderlyingDateRelativeTo;