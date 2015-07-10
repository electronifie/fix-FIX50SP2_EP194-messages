var invert = require('invert-obj');

function UnencodedAttachmentLen (unencodedAttachmentLen) {
  this.message = unencodedAttachmentLen;
}

UnencodedAttachmentLen.prototype.value = function () {
  return this.message;
};

UnencodedAttachmentLen.Tag = '2110';

UnencodedAttachmentLen.Type = 'INT';

module.exports = UnencodedAttachmentLen;