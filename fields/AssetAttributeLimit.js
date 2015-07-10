var invert = require('invert-obj');

function AssetAttributeLimit (assetAttributeLimit) {
  this.message = assetAttributeLimit;
}

AssetAttributeLimit.prototype.value = function () {
  return this.message;
};

AssetAttributeLimit.Tag = '2307';

AssetAttributeLimit.Type = 'STRING';

module.exports = AssetAttributeLimit;