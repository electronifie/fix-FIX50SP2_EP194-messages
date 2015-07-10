var invert = require('invert-obj');

function RelatedToStreamXIDRef (relatedToStreamXidref) {
  this.message = relatedToStreamXidref;
}

RelatedToStreamXIDRef.prototype.value = function () {
  return this.message;
};

RelatedToStreamXIDRef.Tag = '2415';

RelatedToStreamXIDRef.Type = 'XIDREF';

module.exports = RelatedToStreamXIDRef;