var NoStreamAssetAttributes = require('../fields/NoStreamAssetAttributes');
var StreamAssetAttributeType = require('../fields/StreamAssetAttributeType');
var StreamAssetAttributeValue = require('../fields/StreamAssetAttributeValue');
var StreamAssetAttributeLimit = require('../fields/StreamAssetAttributeLimit');

function StreamAssetAttributeGrp (streamAssetAttributeGrp) {
  this.message = streamAssetAttributeGrp;
}

/* group */

/* field */
StreamAssetAttributeGrp.prototype.streamAssetAttributeType = function () {
  return new StreamAssetAttributeType(this.message.tags[StreamAssetAttributeType.Tag]);
};

/* field */
StreamAssetAttributeGrp.prototype.streamAssetAttributeValue = function () {
  return new StreamAssetAttributeValue(this.message.tags[StreamAssetAttributeValue.Tag]);
};

/* field */
StreamAssetAttributeGrp.prototype.streamAssetAttributeLimit = function () {
  return new StreamAssetAttributeLimit(this.message.tags[StreamAssetAttributeLimit.Tag]);
};

/* end group */

StreamAssetAttributeGrp.Tag = '41237';

module.exports = StreamAssetAttributeGrp;