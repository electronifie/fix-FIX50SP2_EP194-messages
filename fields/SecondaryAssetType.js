var invert = require('invert-obj');

function SecondaryAssetType (secondaryAssetType) {
  this.message = secondaryAssetType;
}

SecondaryAssetType.prototype.value = function () {
  return this.message;
};

SecondaryAssetType.Tag = '1979';

SecondaryAssetType.Type = 'STRING';

module.exports = SecondaryAssetType;