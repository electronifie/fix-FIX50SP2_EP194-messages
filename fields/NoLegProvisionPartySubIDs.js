var invert = require('invert-obj');

function NoLegProvisionPartySubIDs (noLegProvisionPartySubIds) {
  this.message = noLegProvisionPartySubIds;
}

NoLegProvisionPartySubIDs.prototype.value = function () {
  return this.message;
};

NoLegProvisionPartySubIDs.Tag = '40537';

NoLegProvisionPartySubIDs.Type = 'NUMINGROUP';

module.exports = NoLegProvisionPartySubIDs;