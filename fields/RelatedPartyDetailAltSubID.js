var invert = require('invert-obj');

function RelatedPartyDetailAltSubID (relatedPartyDetailAltSubId) {
  this.message = relatedPartyDetailAltSubId;
}

RelatedPartyDetailAltSubID.prototype.value = function () {
  return this.message;
};

RelatedPartyDetailAltSubID.Tag = '1573';

RelatedPartyDetailAltSubID.Type = 'STRING';

module.exports = RelatedPartyDetailAltSubID;