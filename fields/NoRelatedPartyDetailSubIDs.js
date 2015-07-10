var invert = require('invert-obj');

function NoRelatedPartyDetailSubIDs (noRelatedPartyDetailSubIds) {
  this.message = noRelatedPartyDetailSubIds;
}

NoRelatedPartyDetailSubIDs.prototype.value = function () {
  return this.message;
};

NoRelatedPartyDetailSubIDs.Tag = '1566';

NoRelatedPartyDetailSubIDs.Type = 'NUMINGROUP';

module.exports = NoRelatedPartyDetailSubIDs;