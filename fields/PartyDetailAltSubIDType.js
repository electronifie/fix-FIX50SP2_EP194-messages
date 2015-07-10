var invert = require('invert-obj');

function PartyDetailAltSubIDType (partyDetailAltSubIdtype) {
  this.message = partyDetailAltSubIdtype;
}

PartyDetailAltSubIDType.prototype.value = function () {
  return this.message;
};

PartyDetailAltSubIDType.Tag = '1521';

PartyDetailAltSubIDType.Type = 'INT';

module.exports = PartyDetailAltSubIDType;