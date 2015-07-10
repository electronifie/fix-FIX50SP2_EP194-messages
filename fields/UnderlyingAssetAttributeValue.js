var invert = require('invert-obj');

function UnderlyingAssetAttributeValue (underlyingAssetAttributeValue) {
  this.message = underlyingAssetAttributeValue;
}

UnderlyingAssetAttributeValue.prototype.value = function () {
  return this.message;
};

UnderlyingAssetAttributeValue.Tag = '2314';

UnderlyingAssetAttributeValue.Type = 'STRING';

module.exports = UnderlyingAssetAttributeValue;