var invert = require('invert-obj');

function UnderlyingAttachmentPoint (underlyingAttachmentPoint) {
  this.message = underlyingAttachmentPoint;
}

UnderlyingAttachmentPoint.prototype.value = function () {
  return this.message;
};

UnderlyingAttachmentPoint.Tag = '1459';

UnderlyingAttachmentPoint.Type = 'PERCENTAGE';

module.exports = UnderlyingAttachmentPoint;