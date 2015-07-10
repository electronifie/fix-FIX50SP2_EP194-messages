var invert = require('invert-obj');

function RelatedPartyDetailID (relatedPartyDetailId) {
  this.message = relatedPartyDetailId;
}

RelatedPartyDetailID.prototype.value = function () {
  return this.message;
};

RelatedPartyDetailID.Tag = '1563';

RelatedPartyDetailID.Type = 'STRING';

module.exports = RelatedPartyDetailID;