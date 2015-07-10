var invert = require('invert-obj');

function NoProvisionPartyIDs (noProvisionPartyIds) {
  this.message = noProvisionPartyIds;
}

NoProvisionPartyIDs.prototype.value = function () {
  return this.message;
};

NoProvisionPartyIDs.Tag = '40174';

NoProvisionPartyIDs.Type = 'NUMINGROUP';

module.exports = NoProvisionPartyIDs;