var NoAttachments = require('../fields/NoAttachments');
var AttachmentKeywordGrp = require('../components/AttachmentKeywordGrp');
var AttachmentName = require('../fields/AttachmentName');
var AttachmentMediaType = require('../fields/AttachmentMediaType');
var AttachmentClassification = require('../fields/AttachmentClassification');
var AttachmentExternalURL = require('../fields/AttachmentExternalURL');
var AttachmentEncodingType = require('../fields/AttachmentEncodingType');
var UnencodedAttachmentLen = require('../fields/UnencodedAttachmentLen');
var EncodedAttachmentLen = require('../fields/EncodedAttachmentLen');
var EncodedAttachment = require('../fields/EncodedAttachment');

function AttachmentGrp (attachmentGrp) {
  this.message = attachmentGrp;
}

/* group */

/* component */
AttachmentGrp.prototype.attachmentKeywordGrp = function () {
  return this.message.groups[AttachmentKeywordGrp.Tag]
    .map(function (attachmentKeywordGrp) {
      return new AttachmentKeywordGrp(attachmentKeywordGrp);
  });
};

/* field */
AttachmentGrp.prototype.attachmentName = function () {
  return new AttachmentName(this.message.tags[AttachmentName.Tag]);
};

/* field */
AttachmentGrp.prototype.attachmentMediaType = function () {
  return new AttachmentMediaType(this.message.tags[AttachmentMediaType.Tag]);
};

/* field */
AttachmentGrp.prototype.attachmentClassification = function () {
  return new AttachmentClassification(this.message.tags[AttachmentClassification.Tag]);
};

/* field */
AttachmentGrp.prototype.attachmentExternalUrl = function () {
  return new AttachmentExternalURL(this.message.tags[AttachmentExternalURL.Tag]);
};

/* field */
AttachmentGrp.prototype.attachmentEncodingType = function () {
  return new AttachmentEncodingType(this.message.tags[AttachmentEncodingType.Tag]);
};

/* field */
AttachmentGrp.prototype.unencodedAttachmentLen = function () {
  return new UnencodedAttachmentLen(this.message.tags[UnencodedAttachmentLen.Tag]);
};

/* field */
AttachmentGrp.prototype.encodedAttachmentLen = function () {
  return new EncodedAttachmentLen(this.message.tags[EncodedAttachmentLen.Tag]);
};

/* field */
AttachmentGrp.prototype.encodedAttachment = function () {
  return new EncodedAttachment(this.message.tags[EncodedAttachment.Tag]);
};

/* end group */

AttachmentGrp.Tag = '2104';

module.exports = AttachmentGrp;