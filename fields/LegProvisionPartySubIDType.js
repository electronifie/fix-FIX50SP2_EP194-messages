var invert = require('invert-obj');

function LegProvisionPartySubIDType (legProvisionPartySubIdtype) {
  this.message = legProvisionPartySubIdtype;
}

LegProvisionPartySubIDType.prototype.value = function () {
  return this.message;
};

LegProvisionPartySubIDType.Tag = '40539';

LegProvisionPartySubIDType.Type = 'INT';

module.exports = LegProvisionPartySubIDType;