var invert = require('invert-obj');

function EncodedLegDocumentationText (encodedLegDocumentationText) {
  this.message = encodedLegDocumentationText;
}

EncodedLegDocumentationText.prototype.value = function () {
  return this.message;
};

EncodedLegDocumentationText.Tag = '2493';

EncodedLegDocumentationText.Type = 'DATA';

module.exports = EncodedLegDocumentationText;