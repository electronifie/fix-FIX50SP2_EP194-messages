var invert = require('invert-obj');

function NoLegProvisionPartyIDs (noLegProvisionPartyIds) {
  this.message = noLegProvisionPartyIds;
}

NoLegProvisionPartyIDs.prototype.value = function () {
  return this.message;
};

NoLegProvisionPartyIDs.Tag = '40533';

NoLegProvisionPartyIDs.Type = 'NUMINGROUP';

module.exports = NoLegProvisionPartyIDs;