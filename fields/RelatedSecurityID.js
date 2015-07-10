var invert = require('invert-obj');

function RelatedSecurityID (relatedSecurityId) {
  this.message = relatedSecurityId;
}

RelatedSecurityID.prototype.value = function () {
  return this.message;
};

RelatedSecurityID.Tag = '1650';

RelatedSecurityID.Type = 'STRING';

module.exports = RelatedSecurityID;