var invert = require('invert-obj');

function AttachmentEncodingType (attachmentEncodingType) {
  this.message = attachmentEncodingType;
}

AttachmentEncodingType.prototype.value = function () {
  return this.message;
};


AttachmentEncodingType.Keys = {
  'BASE64_ENCODING': '0',
  'UNENCODED_BINARY_CONTENT': '1',
};

AttachmentEncodingType.Tag = '2109';

AttachmentEncodingType.Type = 'INT';

AttachmentEncodingType.Values = invert(AttachmentEncodingType.Keys);

module.exports = AttachmentEncodingType;