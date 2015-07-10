var NoUnderlyingStreamAssetAttributes = require('../fields/NoUnderlyingStreamAssetAttributes');
var UnderlyingStreamAssetAttributeType = require('../fields/UnderlyingStreamAssetAttributeType');
var UnderlyingStreamAssetAttributeValue = require('../fields/UnderlyingStreamAssetAttributeValue');
var UnderlyingStreamAssetAttributeLimit = require('../fields/UnderlyingStreamAssetAttributeLimit');

function UnderlyingStreamAssetAttributeGrp (underlyingStreamAssetAttributeGrp) {
  this.message = underlyingStreamAssetAttributeGrp;
}

/* group */

/* field */
UnderlyingStreamAssetAttributeGrp.prototype.underlyingStreamAssetAttributeType = function () {
  return new UnderlyingStreamAssetAttributeType(this.message.tags[UnderlyingStreamAssetAttributeType.Tag]);
};

/* field */
UnderlyingStreamAssetAttributeGrp.prototype.underlyingStreamAssetAttributeValue = function () {
  return new UnderlyingStreamAssetAttributeValue(this.message.tags[UnderlyingStreamAssetAttributeValue.Tag]);
};

/* field */
UnderlyingStreamAssetAttributeGrp.prototype.underlyingStreamAssetAttributeLimit = function () {
  return new UnderlyingStreamAssetAttributeLimit(this.message.tags[UnderlyingStreamAssetAttributeLimit.Tag]);
};

/* end group */

UnderlyingStreamAssetAttributeGrp.Tag = '41800';

module.exports = UnderlyingStreamAssetAttributeGrp;