var invert = require('invert-obj');

function RelatedPartyDetailIDSource (relatedPartyDetailIdsource) {
  this.message = relatedPartyDetailIdsource;
}

RelatedPartyDetailIDSource.prototype.value = function () {
  return this.message;
};

RelatedPartyDetailIDSource.Tag = '1564';

RelatedPartyDetailIDSource.Type = 'CHAR';

module.exports = RelatedPartyDetailIDSource;