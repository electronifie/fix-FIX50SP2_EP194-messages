var invert = require('invert-obj');

function NoPartyDetailSubIDs (noPartyDetailSubIds) {
  this.message = noPartyDetailSubIds;
}

NoPartyDetailSubIDs.prototype.value = function () {
  return this.message;
};

NoPartyDetailSubIDs.Tag = '1694';

NoPartyDetailSubIDs.Type = 'NUMINGROUP';

module.exports = NoPartyDetailSubIDs;