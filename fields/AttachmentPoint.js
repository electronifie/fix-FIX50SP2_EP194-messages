var invert = require('invert-obj');

function AttachmentPoint (attachmentPoint) {
  this.message = attachmentPoint;
}

AttachmentPoint.prototype.value = function () {
  return this.message;
};

AttachmentPoint.Tag = '1457';

AttachmentPoint.Type = 'PERCENTAGE';

module.exports = AttachmentPoint;