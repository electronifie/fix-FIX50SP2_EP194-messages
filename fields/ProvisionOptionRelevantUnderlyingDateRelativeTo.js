var invert = require('invert-obj');

function ProvisionOptionRelevantUnderlyingDateRelativeTo (provisionOptionRelevantUnderlyingDateRelativeTo) {
  this.message = provisionOptionRelevantUnderlyingDateRelativeTo;
}

ProvisionOptionRelevantUnderlyingDateRelativeTo.prototype.value = function () {
  return this.message;
};

ProvisionOptionRelevantUnderlyingDateRelativeTo.Tag = '40158';

ProvisionOptionRelevantUnderlyingDateRelativeTo.Type = 'INT';

module.exports = ProvisionOptionRelevantUnderlyingDateRelativeTo;