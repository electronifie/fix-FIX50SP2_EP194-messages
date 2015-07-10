var invert = require('invert-obj');

function NoPartyDetailAltSubIDs (noPartyDetailAltSubIds) {
  this.message = noPartyDetailAltSubIds;
}

NoPartyDetailAltSubIDs.prototype.value = function () {
  return this.message;
};

NoPartyDetailAltSubIDs.Tag = '1519';

NoPartyDetailAltSubIDs.Type = 'NUMINGROUP';

module.exports = NoPartyDetailAltSubIDs;