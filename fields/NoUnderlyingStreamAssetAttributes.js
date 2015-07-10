var invert = require('invert-obj');

function NoUnderlyingStreamAssetAttributes (noUnderlyingStreamAssetAttributes) {
  this.message = noUnderlyingStreamAssetAttributes;
}

NoUnderlyingStreamAssetAttributes.prototype.value = function () {
  return this.message;
};

NoUnderlyingStreamAssetAttributes.Tag = '41800';

NoUnderlyingStreamAssetAttributes.Type = 'NUMINGROUP';

module.exports = NoUnderlyingStreamAssetAttributes;