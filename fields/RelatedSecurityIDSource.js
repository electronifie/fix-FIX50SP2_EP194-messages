var invert = require('invert-obj');

function RelatedSecurityIDSource (relatedSecurityIdsource) {
  this.message = relatedSecurityIdsource;
}

RelatedSecurityIDSource.prototype.value = function () {
  return this.message;
};

RelatedSecurityIDSource.Tag = '1651';

RelatedSecurityIDSource.Type = 'STRING';

module.exports = RelatedSecurityIDSource;