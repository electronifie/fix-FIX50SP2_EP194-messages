var NoUnderlyingSecondaryAssetClasses = require('../fields/NoUnderlyingSecondaryAssetClasses');
var UnderlyingSecondaryAssetClass = require('../fields/UnderlyingSecondaryAssetClass');
var UnderlyingSecondaryAssetSubClass = require('../fields/UnderlyingSecondaryAssetSubClass');
var UnderlyingSecondaryAssetType = require('../fields/UnderlyingSecondaryAssetType');

function UnderlyingSecondaryAssetGrp (underlyingSecondaryAssetGrp) {
  this.message = underlyingSecondaryAssetGrp;
}

/* group */

/* field */
UnderlyingSecondaryAssetGrp.prototype.underlyingSecondaryAssetClass = function () {
  return new UnderlyingSecondaryAssetClass(this.message.tags[UnderlyingSecondaryAssetClass.Tag]);
};

/* field */
UnderlyingSecondaryAssetGrp.prototype.underlyingSecondaryAssetSubClass = function () {
  return new UnderlyingSecondaryAssetSubClass(this.message.tags[UnderlyingSecondaryAssetSubClass.Tag]);
};

/* field */
UnderlyingSecondaryAssetGrp.prototype.underlyingSecondaryAssetType = function () {
  return new UnderlyingSecondaryAssetType(this.message.tags[UnderlyingSecondaryAssetType.Tag]);
};

/* end group */

UnderlyingSecondaryAssetGrp.Tag = '2080';

module.exports = UnderlyingSecondaryAssetGrp;