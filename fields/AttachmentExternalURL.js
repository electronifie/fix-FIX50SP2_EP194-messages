var invert = require('invert-obj');

function AttachmentExternalURL (attachmentExternalUrl) {
  this.message = attachmentExternalUrl;
}

AttachmentExternalURL.prototype.value = function () {
  return this.message;
};

AttachmentExternalURL.Tag = '2108';

AttachmentExternalURL.Type = 'STRING';

module.exports = AttachmentExternalURL;