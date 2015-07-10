var invert = require('invert-obj');

function AttachmentMediaType (attachmentMediaType) {
  this.message = attachmentMediaType;
}

AttachmentMediaType.prototype.value = function () {
  return this.message;
};

AttachmentMediaType.Tag = '2106';

AttachmentMediaType.Type = 'STRING';

module.exports = AttachmentMediaType;