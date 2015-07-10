var invert = require('invert-obj');

function PartyDetailSubID (partyDetailSubId) {
  this.message = partyDetailSubId;
}

PartyDetailSubID.prototype.value = function () {
  return this.message;
};

PartyDetailSubID.Tag = '1695';

PartyDetailSubID.Type = 'STRING';

module.exports = PartyDetailSubID;