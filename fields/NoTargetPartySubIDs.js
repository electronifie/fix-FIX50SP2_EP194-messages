var invert = require('invert-obj');

function NoTargetPartySubIDs (noTargetPartySubIds) {
  this.message = noTargetPartySubIds;
}

NoTargetPartySubIDs.prototype.value = function () {
  return this.message;
};

NoTargetPartySubIDs.Tag = '2433';

NoTargetPartySubIDs.Type = 'NUMINGROUP';

module.exports = NoTargetPartySubIDs;