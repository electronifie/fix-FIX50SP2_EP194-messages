var NoUnderlyingAssetAttributes = require('../fields/NoUnderlyingAssetAttributes');
var UnderlyingAssetAttributeType = require('../fields/UnderlyingAssetAttributeType');
var UnderlyingAssetAttributeValue = require('../fields/UnderlyingAssetAttributeValue');
var UnderlyingAssetAttributeLimit = require('../fields/UnderlyingAssetAttributeLimit');

function UnderlyingAssetAttributeGrp (underlyingAssetAttributeGrp) {
  this.message = underlyingAssetAttributeGrp;
}

/* group */

/* field */
UnderlyingAssetAttributeGrp.prototype.underlyingAssetAttributeType = function () {
  return new UnderlyingAssetAttributeType(this.message.tags[UnderlyingAssetAttributeType.Tag]);
};

/* field */
UnderlyingAssetAttributeGrp.prototype.underlyingAssetAttributeValue = function () {
  return new UnderlyingAssetAttributeValue(this.message.tags[UnderlyingAssetAttributeValue.Tag]);
};

/* field */
UnderlyingAssetAttributeGrp.prototype.underlyingAssetAttributeLimit = function () {
  return new UnderlyingAssetAttributeLimit(this.message.tags[UnderlyingAssetAttributeLimit.Tag]);
};

/* end group */

UnderlyingAssetAttributeGrp.Tag = '2312';

module.exports = UnderlyingAssetAttributeGrp;