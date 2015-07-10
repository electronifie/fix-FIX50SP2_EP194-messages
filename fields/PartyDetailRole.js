var invert = require('invert-obj');

function PartyDetailRole (partyDetailRole) {
  this.message = partyDetailRole;
}

PartyDetailRole.prototype.value = function () {
  return this.message;
};

PartyDetailRole.Tag = '1693';

PartyDetailRole.Type = 'INT';

module.exports = PartyDetailRole;