var invert = require('invert-obj');

function EncodedAttachmentLen (encodedAttachmentLen) {
  this.message = encodedAttachmentLen;
}

EncodedAttachmentLen.prototype.value = function () {
  return this.message;
};

EncodedAttachmentLen.Tag = '2111';

EncodedAttachmentLen.Type = 'LENGTH';

module.exports = EncodedAttachmentLen;