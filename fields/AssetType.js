var invert = require('invert-obj');

function AssetType (assetType) {
  this.message = assetType;
}

AssetType.prototype.value = function () {
  return this.message;
};

AssetType.Tag = '1940';

AssetType.Type = 'STRING';

module.exports = AssetType;