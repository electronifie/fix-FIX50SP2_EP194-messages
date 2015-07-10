var invert = require('invert-obj');

function UnderlyingDetachmentPoint (underlyingDetachmentPoint) {
  this.message = underlyingDetachmentPoint;
}

UnderlyingDetachmentPoint.prototype.value = function () {
  return this.message;
};

UnderlyingDetachmentPoint.Tag = '1460';

UnderlyingDetachmentPoint.Type = 'PERCENTAGE';

module.exports = UnderlyingDetachmentPoint;