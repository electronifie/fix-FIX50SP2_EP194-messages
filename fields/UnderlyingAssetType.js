var invert = require('invert-obj');

function UnderlyingAssetType (underlyingAssetType) {
  this.message = underlyingAssetType;
}

UnderlyingAssetType.prototype.value = function () {
  return this.message;
};

UnderlyingAssetType.Tag = '2015';

UnderlyingAssetType.Type = 'STRING';

module.exports = UnderlyingAssetType;