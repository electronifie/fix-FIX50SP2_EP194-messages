var invert = require('invert-obj');

function AttachmentClassification (attachmentClassification) {
  this.message = attachmentClassification;
}

AttachmentClassification.prototype.value = function () {
  return this.message;
};

AttachmentClassification.Tag = '2107';

AttachmentClassification.Type = 'STRING';

module.exports = AttachmentClassification;