var invert = require('invert-obj');

function NoRelatedPartyDetailAltSubIDs (noRelatedPartyDetailAltSubIds) {
  this.message = noRelatedPartyDetailAltSubIds;
}

NoRelatedPartyDetailAltSubIDs.prototype.value = function () {
  return this.message;
};

NoRelatedPartyDetailAltSubIDs.Tag = '1572';

NoRelatedPartyDetailAltSubIDs.Type = 'NUMINGROUP';

module.exports = NoRelatedPartyDetailAltSubIDs;