var invert = require('invert-obj');

function PartyDetailAltIDSource (partyDetailAltIdsource) {
  this.message = partyDetailAltIdsource;
}

PartyDetailAltIDSource.prototype.value = function () {
  return this.message;
};

PartyDetailAltIDSource.Tag = '1518';

PartyDetailAltIDSource.Type = 'CHAR';

module.exports = PartyDetailAltIDSource;