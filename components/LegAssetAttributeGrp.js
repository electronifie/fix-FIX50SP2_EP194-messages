var NoLegAssetAttributes = require('../fields/NoLegAssetAttributes');
var LegAssetAttributeType = require('../fields/LegAssetAttributeType');
var LegAssetAttributeValue = require('../fields/LegAssetAttributeValue');
var LegAssetAttributeLimit = require('../fields/LegAssetAttributeLimit');

function LegAssetAttributeGrp (legAssetAttributeGrp) {
  this.message = legAssetAttributeGrp;
}

/* group */

/* field */
LegAssetAttributeGrp.prototype.legAssetAttributeType = function () {
  return new LegAssetAttributeType(this.message.tags[LegAssetAttributeType.Tag]);
};

/* field */
LegAssetAttributeGrp.prototype.legAssetAttributeValue = function () {
  return new LegAssetAttributeValue(this.message.tags[LegAssetAttributeValue.Tag]);
};

/* field */
LegAssetAttributeGrp.prototype.legAssetAttributeLimit = function () {
  return new LegAssetAttributeLimit(this.message.tags[LegAssetAttributeLimit.Tag]);
};

/* end group */

LegAssetAttributeGrp.Tag = '2308';

module.exports = LegAssetAttributeGrp;