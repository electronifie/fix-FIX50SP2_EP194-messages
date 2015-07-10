var NoAssetAttributes = require('../fields/NoAssetAttributes');
var AssetAttributeType = require('../fields/AssetAttributeType');
var AssetAttributeValue = require('../fields/AssetAttributeValue');
var AssetAttributeLimit = require('../fields/AssetAttributeLimit');

function AssetAttributeGrp (assetAttributeGrp) {
  this.message = assetAttributeGrp;
}

/* group */

/* field */
AssetAttributeGrp.prototype.assetAttributeType = function () {
  return new AssetAttributeType(this.message.tags[AssetAttributeType.Tag]);
};

/* field */
AssetAttributeGrp.prototype.assetAttributeValue = function () {
  return new AssetAttributeValue(this.message.tags[AssetAttributeValue.Tag]);
};

/* field */
AssetAttributeGrp.prototype.assetAttributeLimit = function () {
  return new AssetAttributeLimit(this.message.tags[AssetAttributeLimit.Tag]);
};

/* end group */

AssetAttributeGrp.Tag = '2304';

module.exports = AssetAttributeGrp;