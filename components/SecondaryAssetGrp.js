var NoSecondaryAssetClasses = require('../fields/NoSecondaryAssetClasses');
var SecondaryAssetClass = require('../fields/SecondaryAssetClass');
var SecondaryAssetSubClass = require('../fields/SecondaryAssetSubClass');
var SecondaryAssetType = require('../fields/SecondaryAssetType');

function SecondaryAssetGrp (secondaryAssetGrp) {
  this.message = secondaryAssetGrp;
}

/* group */

/* field */
SecondaryAssetGrp.prototype.secondaryAssetClass = function () {
  return new SecondaryAssetClass(this.message.tags[SecondaryAssetClass.Tag]);
};

/* field */
SecondaryAssetGrp.prototype.secondaryAssetSubClass = function () {
  return new SecondaryAssetSubClass(this.message.tags[SecondaryAssetSubClass.Tag]);
};

/* field */
SecondaryAssetGrp.prototype.secondaryAssetType = function () {
  return new SecondaryAssetType(this.message.tags[SecondaryAssetType.Tag]);
};

/* end group */

SecondaryAssetGrp.Tag = '1976';

module.exports = SecondaryAssetGrp;