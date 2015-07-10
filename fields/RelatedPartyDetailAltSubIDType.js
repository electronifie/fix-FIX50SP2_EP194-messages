var invert = require('invert-obj');

function RelatedPartyDetailAltSubIDType (relatedPartyDetailAltSubIdtype) {
  this.message = relatedPartyDetailAltSubIdtype;
}

RelatedPartyDetailAltSubIDType.prototype.value = function () {
  return this.message;
};

RelatedPartyDetailAltSubIDType.Tag = '1574';

RelatedPartyDetailAltSubIDType.Type = 'INT';

module.exports = RelatedPartyDetailAltSubIDType;