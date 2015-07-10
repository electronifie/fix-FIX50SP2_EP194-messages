var invert = require('invert-obj');

function NoUnderlyingProvisionPartyIDs (noUnderlyingProvisionPartyIds) {
  this.message = noUnderlyingProvisionPartyIds;
}

NoUnderlyingProvisionPartyIDs.prototype.value = function () {
  return this.message;
};

NoUnderlyingProvisionPartyIDs.Tag = '42173';

NoUnderlyingProvisionPartyIDs.Type = 'NUMINGROUP';

module.exports = NoUnderlyingProvisionPartyIDs;