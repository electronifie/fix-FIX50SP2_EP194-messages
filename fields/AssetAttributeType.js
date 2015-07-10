var invert = require('invert-obj');

function AssetAttributeType (assetAttributeType) {
  this.message = assetAttributeType;
}

AssetAttributeType.prototype.value = function () {
  return this.message;
};

AssetAttributeType.Tag = '2305';

AssetAttributeType.Type = 'STRING';

module.exports = AssetAttributeType;