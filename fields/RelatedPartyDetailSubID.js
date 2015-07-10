var invert = require('invert-obj');

function RelatedPartyDetailSubID (relatedPartyDetailSubId) {
  this.message = relatedPartyDetailSubId;
}

RelatedPartyDetailSubID.prototype.value = function () {
  return this.message;
};

RelatedPartyDetailSubID.Tag = '1567';

RelatedPartyDetailSubID.Type = 'STRING';

module.exports = RelatedPartyDetailSubID;