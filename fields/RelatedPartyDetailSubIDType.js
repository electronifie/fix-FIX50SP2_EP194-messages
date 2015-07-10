var invert = require('invert-obj');

function RelatedPartyDetailSubIDType (relatedPartyDetailSubIdtype) {
  this.message = relatedPartyDetailSubIdtype;
}

RelatedPartyDetailSubIDType.prototype.value = function () {
  return this.message;
};

RelatedPartyDetailSubIDType.Tag = '1568';

RelatedPartyDetailSubIDType.Type = 'INT';

module.exports = RelatedPartyDetailSubIDType;