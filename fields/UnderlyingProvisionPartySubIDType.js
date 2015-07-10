var invert = require('invert-obj');

function UnderlyingProvisionPartySubIDType (underlyingProvisionPartySubIdtype) {
  this.message = underlyingProvisionPartySubIdtype;
}

UnderlyingProvisionPartySubIDType.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionPartySubIDType.Tag = '42179';

UnderlyingProvisionPartySubIDType.Type = 'INT';

module.exports = UnderlyingProvisionPartySubIDType;