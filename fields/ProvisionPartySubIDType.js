var invert = require('invert-obj');

function ProvisionPartySubIDType (provisionPartySubIdtype) {
  this.message = provisionPartySubIdtype;
}

ProvisionPartySubIDType.prototype.value = function () {
  return this.message;
};

ProvisionPartySubIDType.Tag = '40180';

ProvisionPartySubIDType.Type = 'INT';

module.exports = ProvisionPartySubIDType;