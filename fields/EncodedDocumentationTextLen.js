var invert = require('invert-obj');

function EncodedDocumentationTextLen (encodedDocumentationTextLen) {
  this.message = encodedDocumentationTextLen;
}

EncodedDocumentationTextLen.prototype.value = function () {
  return this.message;
};

EncodedDocumentationTextLen.Tag = '1525';

EncodedDocumentationTextLen.Type = 'LENGTH';

module.exports = EncodedDocumentationTextLen;