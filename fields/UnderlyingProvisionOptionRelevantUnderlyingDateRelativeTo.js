var invert = require('invert-obj');

function UnderlyingProvisionOptionRelevantUnderlyingDateRelativeTo (underlyingProvisionOptionRelevantUnderlyingDateRelativeTo) {
  this.message = underlyingProvisionOptionRelevantUnderlyingDateRelativeTo;
}

UnderlyingProvisionOptionRelevantUnderlyingDateRelativeTo.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionOptionRelevantUnderlyingDateRelativeTo.Tag = '42144';

UnderlyingProvisionOptionRelevantUnderlyingDateRelativeTo.Type = 'INT';

module.exports = UnderlyingProvisionOptionRelevantUnderlyingDateRelativeTo;