var invert = require('invert-obj');

function EncodedLegDocumentationTextLen (encodedLegDocumentationTextLen) {
  this.message = encodedLegDocumentationTextLen;
}

EncodedLegDocumentationTextLen.prototype.value = function () {
  return this.message;
};

EncodedLegDocumentationTextLen.Tag = '2494';

EncodedLegDocumentationTextLen.Type = 'LENGTH';

module.exports = EncodedLegDocumentationTextLen;