var invert = require('invert-obj');

function DetachmentPoint (detachmentPoint) {
  this.message = detachmentPoint;
}

DetachmentPoint.prototype.value = function () {
  return this.message;
};

DetachmentPoint.Tag = '1458';

DetachmentPoint.Type = 'PERCENTAGE';

module.exports = DetachmentPoint;