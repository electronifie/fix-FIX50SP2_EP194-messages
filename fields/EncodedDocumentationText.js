var invert = require('invert-obj');

function EncodedDocumentationText (encodedDocumentationText) {
  this.message = encodedDocumentationText;
}

EncodedDocumentationText.prototype.value = function () {
  return this.message;
};

EncodedDocumentationText.Tag = '1527';

EncodedDocumentationText.Type = 'DATA';

module.exports = EncodedDocumentationText;