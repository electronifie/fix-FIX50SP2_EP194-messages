var invert = require('invert-obj');

function LegSecondaryAssetType (legSecondaryAssetType) {
  this.message = legSecondaryAssetType;
}

LegSecondaryAssetType.prototype.value = function () {
  return this.message;
};

LegSecondaryAssetType.Tag = '2079';

LegSecondaryAssetType.Type = 'STRING';

module.exports = LegSecondaryAssetType;