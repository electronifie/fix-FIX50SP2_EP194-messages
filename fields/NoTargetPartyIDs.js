var invert = require('invert-obj');

function NoTargetPartyIDs (noTargetPartyIds) {
  this.message = noTargetPartyIds;
}

NoTargetPartyIDs.prototype.value = function () {
  return this.message;
};

NoTargetPartyIDs.Tag = '1461';

NoTargetPartyIDs.Type = 'NUMINGROUP';

module.exports = NoTargetPartyIDs;