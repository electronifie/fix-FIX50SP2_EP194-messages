var invert = require('invert-obj');

function RelatedPartyDetailAltID (relatedPartyDetailAltId) {
  this.message = relatedPartyDetailAltId;
}

RelatedPartyDetailAltID.prototype.value = function () {
  return this.message;
};

RelatedPartyDetailAltID.Tag = '1570';

RelatedPartyDetailAltID.Type = 'STRING';

module.exports = RelatedPartyDetailAltID;