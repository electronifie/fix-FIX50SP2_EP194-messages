var invert = require('invert-obj');

function NoAttachmentKeywords (noAttachmentKeywords) {
  this.message = noAttachmentKeywords;
}

NoAttachmentKeywords.prototype.value = function () {
  return this.message;
};

NoAttachmentKeywords.Tag = '2113';

NoAttachmentKeywords.Type = 'NUMINGROUP';

module.exports = NoAttachmentKeywords;