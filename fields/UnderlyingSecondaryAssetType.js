var invert = require('invert-obj');

function UnderlyingSecondaryAssetType (underlyingSecondaryAssetType) {
  this.message = underlyingSecondaryAssetType;
}

UnderlyingSecondaryAssetType.prototype.value = function () {
  return this.message;
};

UnderlyingSecondaryAssetType.Tag = '2083';

UnderlyingSecondaryAssetType.Type = 'STRING';

module.exports = UnderlyingSecondaryAssetType;