var invert = require('invert-obj');

function RelatedPartyDetailAltIDSource (relatedPartyDetailAltIdsource) {
  this.message = relatedPartyDetailAltIdsource;
}

RelatedPartyDetailAltIDSource.prototype.value = function () {
  return this.message;
};

RelatedPartyDetailAltIDSource.Tag = '1571';

RelatedPartyDetailAltIDSource.Type = 'CHAR';

module.exports = RelatedPartyDetailAltIDSource;