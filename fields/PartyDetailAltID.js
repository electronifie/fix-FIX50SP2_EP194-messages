var invert = require('invert-obj');

function PartyDetailAltID (partyDetailAltId) {
  this.message = partyDetailAltId;
}

PartyDetailAltID.prototype.value = function () {
  return this.message;
};

PartyDetailAltID.Tag = '1517';

PartyDetailAltID.Type = 'STRING';

module.exports = PartyDetailAltID;