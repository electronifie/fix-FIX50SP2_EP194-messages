var invert = require('invert-obj');

function AssetAttributeValue (assetAttributeValue) {
  this.message = assetAttributeValue;
}

AssetAttributeValue.prototype.value = function () {
  return this.message;
};

AssetAttributeValue.Tag = '2306';

AssetAttributeValue.Type = 'STRING';

module.exports = AssetAttributeValue;