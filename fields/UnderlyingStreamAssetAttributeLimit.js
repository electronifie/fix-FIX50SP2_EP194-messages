var invert = require('invert-obj');

function UnderlyingStreamAssetAttributeLimit (underlyingStreamAssetAttributeLimit) {
  this.message = underlyingStreamAssetAttributeLimit;
}

UnderlyingStreamAssetAttributeLimit.prototype.value = function () {
  return this.message;
};

UnderlyingStreamAssetAttributeLimit.Tag = '41803';

UnderlyingStreamAssetAttributeLimit.Type = 'STRING';

module.exports = UnderlyingStreamAssetAttributeLimit;