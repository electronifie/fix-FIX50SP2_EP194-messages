var invert = require('invert-obj');

function RelatedPositionID (relatedPositionId) {
  this.message = relatedPositionId;
}

RelatedPositionID.prototype.value = function () {
  return this.message;
};

RelatedPositionID.Tag = '1862';

RelatedPositionID.Type = 'STRING';

module.exports = RelatedPositionID;