var invert = require('invert-obj');

function LegDocumentationText (legDocumentationText) {
  this.message = legDocumentationText;
}

LegDocumentationText.prototype.value = function () {
  return this.message;
};

LegDocumentationText.Tag = '2505';

LegDocumentationText.Type = 'STRING';

module.exports = LegDocumentationText;