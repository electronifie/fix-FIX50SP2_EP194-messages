var invert = require('invert-obj');

function PartyDetailAltSubID (partyDetailAltSubId) {
  this.message = partyDetailAltSubId;
}

PartyDetailAltSubID.prototype.value = function () {
  return this.message;
};

PartyDetailAltSubID.Tag = '1520';

PartyDetailAltSubID.Type = 'STRING';

module.exports = PartyDetailAltSubID;