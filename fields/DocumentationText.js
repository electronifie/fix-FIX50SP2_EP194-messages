var invert = require('invert-obj');

function DocumentationText (documentationText) {
  this.message = documentationText;
}

DocumentationText.prototype.value = function () {
  return this.message;
};

DocumentationText.Tag = '1513';

DocumentationText.Type = 'STRING';

module.exports = DocumentationText;