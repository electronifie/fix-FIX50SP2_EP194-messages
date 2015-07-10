var invert = require('invert-obj');

function AttachmentKeyword (attachmentKeyword) {
  this.message = attachmentKeyword;
}

AttachmentKeyword.prototype.value = function () {
  return this.message;
};

AttachmentKeyword.Tag = '2114';

AttachmentKeyword.Type = 'STRING';

module.exports = AttachmentKeyword;