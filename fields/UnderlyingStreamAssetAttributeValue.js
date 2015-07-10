var invert = require('invert-obj');

function UnderlyingStreamAssetAttributeValue (underlyingStreamAssetAttributeValue) {
  this.message = underlyingStreamAssetAttributeValue;
}

UnderlyingStreamAssetAttributeValue.prototype.value = function () {
  return this.message;
};

UnderlyingStreamAssetAttributeValue.Tag = '41802';

UnderlyingStreamAssetAttributeValue.Type = 'STRING';

module.exports = UnderlyingStreamAssetAttributeValue;