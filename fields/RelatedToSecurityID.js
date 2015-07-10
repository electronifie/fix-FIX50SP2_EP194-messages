var invert = require('invert-obj');

function RelatedToSecurityID (relatedToSecurityId) {
  this.message = relatedToSecurityId;
}

RelatedToSecurityID.prototype.value = function () {
  return this.message;
};

RelatedToSecurityID.Tag = '2413';

RelatedToSecurityID.Type = 'STRING';

module.exports = RelatedToSecurityID;