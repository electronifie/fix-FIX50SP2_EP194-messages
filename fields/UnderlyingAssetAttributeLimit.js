var invert = require('invert-obj');

function UnderlyingAssetAttributeLimit (underlyingAssetAttributeLimit) {
  this.message = underlyingAssetAttributeLimit;
}

UnderlyingAssetAttributeLimit.prototype.value = function () {
  return this.message;
};

UnderlyingAssetAttributeLimit.Tag = '2315';

UnderlyingAssetAttributeLimit.Type = 'STRING';

module.exports = UnderlyingAssetAttributeLimit;