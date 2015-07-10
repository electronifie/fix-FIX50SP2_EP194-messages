var invert = require('invert-obj');

function LegDetachmentPoint (legDetachmentPoint) {
  this.message = legDetachmentPoint;
}

LegDetachmentPoint.prototype.value = function () {
  return this.message;
};

LegDetachmentPoint.Tag = '2154';

LegDetachmentPoint.Type = 'PERCENTAGE';

module.exports = LegDetachmentPoint;