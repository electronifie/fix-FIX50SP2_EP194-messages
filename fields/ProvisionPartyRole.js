var invert = require('invert-obj');

function ProvisionPartyRole (provisionPartyRole) {
  this.message = provisionPartyRole;
}

ProvisionPartyRole.prototype.value = function () {
  return this.message;
};

ProvisionPartyRole.Tag = '40177';

ProvisionPartyRole.Type = 'INT';

module.exports = ProvisionPartyRole;