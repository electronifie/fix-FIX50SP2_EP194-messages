var invert = require('invert-obj');

function PartyDetailIDSource (partyDetailIdsource) {
  this.message = partyDetailIdsource;
}

PartyDetailIDSource.prototype.value = function () {
  return this.message;
};

PartyDetailIDSource.Tag = '1692';

PartyDetailIDSource.Type = 'CHAR';

module.exports = PartyDetailIDSource;