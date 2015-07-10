var NoAttachmentKeywords = require('../fields/NoAttachmentKeywords');
var AttachmentKeyword = require('../fields/AttachmentKeyword');

function AttachmentKeywordGrp (attachmentKeywordGrp) {
  this.message = attachmentKeywordGrp;
}

/* group */

/* field */
AttachmentKeywordGrp.prototype.attachmentKeyword = function () {
  return new AttachmentKeyword(this.message.tags[AttachmentKeyword.Tag]);
};

/* end group */

AttachmentKeywordGrp.Tag = '2113';

module.exports = AttachmentKeywordGrp;