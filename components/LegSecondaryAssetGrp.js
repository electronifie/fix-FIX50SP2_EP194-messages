var NoLegSecondaryAssetClasses = require('../fields/NoLegSecondaryAssetClasses');
var LegSecondaryAssetClass = require('../fields/LegSecondaryAssetClass');
var LegSecondaryAssetSubClass = require('../fields/LegSecondaryAssetSubClass');
var LegSecondaryAssetType = require('../fields/LegSecondaryAssetType');

function LegSecondaryAssetGrp (legSecondaryAssetGrp) {
  this.message = legSecondaryAssetGrp;
}

/* group */

/* field */
LegSecondaryAssetGrp.prototype.legSecondaryAssetClass = function () {
  return new LegSecondaryAssetClass(this.message.tags[LegSecondaryAssetClass.Tag]);
};

/* field */
LegSecondaryAssetGrp.prototype.legSecondaryAssetSubClass = function () {
  return new LegSecondaryAssetSubClass(this.message.tags[LegSecondaryAssetSubClass.Tag]);
};

/* field */
LegSecondaryAssetGrp.prototype.legSecondaryAssetType = function () {
  return new LegSecondaryAssetType(this.message.tags[LegSecondaryAssetType.Tag]);
};

/* end group */

LegSecondaryAssetGrp.Tag = '2076';

module.exports = LegSecondaryAssetGrp;