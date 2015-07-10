var invert = require('invert-obj');

function ProvisionType (provisionType) {
  this.message = provisionType;
}

ProvisionType.prototype.value = function () {
  return this.message;
};


ProvisionType.Keys = {
  MANDATORY_EARLY_TERMINATION: '0',
  OPTIONAL_EARLY_TERMINATION: '1',
  CANCELABLE: '2',
  EXTENDIBLE: '3',
};

ProvisionType.Tag = '40091';

ProvisionType.Type = 'INT';

ProvisionType.Values = invert(ProvisionType.Keys);

module.exports = ProvisionType;