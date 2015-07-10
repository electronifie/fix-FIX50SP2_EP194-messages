var invert = require('invert-obj');

function NoProvisionPartySubIDs (noProvisionPartySubIds) {
  this.message = noProvisionPartySubIds;
}

NoProvisionPartySubIDs.prototype.value = function () {
  return this.message;
};

NoProvisionPartySubIDs.Tag = '40178';

NoProvisionPartySubIDs.Type = 'NUMINGROUP';

module.exports = NoProvisionPartySubIDs;