var invert = require('invert-obj');

function UnderlyingAssetAttributeType (underlyingAssetAttributeType) {
  this.message = underlyingAssetAttributeType;
}

UnderlyingAssetAttributeType.prototype.value = function () {
  return this.message;
};

UnderlyingAssetAttributeType.Tag = '2313';

UnderlyingAssetAttributeType.Type = 'STRING';

module.exports = UnderlyingAssetAttributeType;