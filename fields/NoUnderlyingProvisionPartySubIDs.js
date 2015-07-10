var invert = require('invert-obj');

function NoUnderlyingProvisionPartySubIDs (noUnderlyingProvisionPartySubIds) {
  this.message = noUnderlyingProvisionPartySubIds;
}

NoUnderlyingProvisionPartySubIDs.prototype.value = function () {
  return this.message;
};

NoUnderlyingProvisionPartySubIDs.Tag = '42177';

NoUnderlyingProvisionPartySubIDs.Type = 'NUMINGROUP';

module.exports = NoUnderlyingProvisionPartySubIDs;