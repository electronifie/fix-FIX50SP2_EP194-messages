var invert = require('invert-obj');

function PartyDetailSubIDType (partyDetailSubIdtype) {
  this.message = partyDetailSubIdtype;
}

PartyDetailSubIDType.prototype.value = function () {
  return this.message;
};

PartyDetailSubIDType.Tag = '1696';

PartyDetailSubIDType.Type = 'INT';

module.exports = PartyDetailSubIDType;