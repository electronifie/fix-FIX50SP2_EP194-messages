var invert = require('invert-obj');

function RelatedToSecurityIDSource (relatedToSecurityIdsource) {
  this.message = relatedToSecurityIdsource;
}

RelatedToSecurityIDSource.prototype.value = function () {
  return this.message;
};

RelatedToSecurityIDSource.Tag = '2414';

RelatedToSecurityIDSource.Type = 'STRING';

module.exports = RelatedToSecurityIDSource;