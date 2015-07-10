var invert = require('invert-obj');

function AttachmentName (attachmentName) {
  this.message = attachmentName;
}

AttachmentName.prototype.value = function () {
  return this.message;
};

AttachmentName.Tag = '2105';

AttachmentName.Type = 'STRING';

module.exports = AttachmentName;