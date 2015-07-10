var invert = require('invert-obj');

function UnderlyingStreamAssetAttributeType (underlyingStreamAssetAttributeType) {
  this.message = underlyingStreamAssetAttributeType;
}

UnderlyingStreamAssetAttributeType.prototype.value = function () {
  return this.message;
};

UnderlyingStreamAssetAttributeType.Tag = '41801';

UnderlyingStreamAssetAttributeType.Type = 'STRING';

module.exports = UnderlyingStreamAssetAttributeType;