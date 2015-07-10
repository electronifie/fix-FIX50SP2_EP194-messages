var invert = require('invert-obj');

function LegAttachmentPoint (legAttachmentPoint) {
  this.message = legAttachmentPoint;
}

LegAttachmentPoint.prototype.value = function () {
  return this.message;
};

LegAttachmentPoint.Tag = '2153';

LegAttachmentPoint.Type = 'PERCENTAGE';

module.exports = LegAttachmentPoint;