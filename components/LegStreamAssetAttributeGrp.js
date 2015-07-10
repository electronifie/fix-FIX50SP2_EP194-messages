var NoLegStreamAssetAttributes = require('../fields/NoLegStreamAssetAttributes');
var LegStreamAssetAttributeType = require('../fields/LegStreamAssetAttributeType');
var LegStreamAssetAttributeValue = require('../fields/LegStreamAssetAttributeValue');
var LegStreamAssetAttributeLimit = require('../fields/LegStreamAssetAttributeLimit');

function LegStreamAssetAttributeGrp (legStreamAssetAttributeGrp) {
  this.message = legStreamAssetAttributeGrp;
}

/* group */

/* field */
LegStreamAssetAttributeGrp.prototype.legStreamAssetAttributeType = function () {
  return new LegStreamAssetAttributeType(this.message.tags[LegStreamAssetAttributeType.Tag]);
};

/* field */
LegStreamAssetAttributeGrp.prototype.legStreamAssetAttributeValue = function () {
  return new LegStreamAssetAttributeValue(this.message.tags[LegStreamAssetAttributeValue.Tag]);
};

/* field */
LegStreamAssetAttributeGrp.prototype.legStreamAssetAttributeLimit = function () {
  return new LegStreamAssetAttributeLimit(this.message.tags[LegStreamAssetAttributeLimit.Tag]);
};

/* end group */

LegStreamAssetAttributeGrp.Tag = '41452';

module.exports = LegStreamAssetAttributeGrp;