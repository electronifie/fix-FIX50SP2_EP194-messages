var invert = require('invert-obj');

function RelatedSecurityType (relatedSecurityType) {
  this.message = relatedSecurityType;
}

RelatedSecurityType.prototype.value = function () {
  return this.message;
};

RelatedSecurityType.Tag = '1652';

RelatedSecurityType.Type = 'STRING';

module.exports = RelatedSecurityType;