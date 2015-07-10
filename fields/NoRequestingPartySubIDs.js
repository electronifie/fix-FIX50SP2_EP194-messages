var invert = require('invert-obj');

function NoRequestingPartySubIDs (noRequestingPartySubIds) {
  this.message = noRequestingPartySubIds;
}

NoRequestingPartySubIDs.prototype.value = function () {
  return this.message;
};

NoRequestingPartySubIDs.Tag = '1661';

NoRequestingPartySubIDs.Type = 'NUMINGROUP';

module.exports = NoRequestingPartySubIDs;