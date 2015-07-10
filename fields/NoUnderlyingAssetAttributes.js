var invert = require('invert-obj');

function NoUnderlyingAssetAttributes (noUnderlyingAssetAttributes) {
  this.message = noUnderlyingAssetAttributes;
}

NoUnderlyingAssetAttributes.prototype.value = function () {
  return this.message;
};

NoUnderlyingAssetAttributes.Tag = '2312';

NoUnderlyingAssetAttributes.Type = 'NUMINGROUP';

module.exports = NoUnderlyingAssetAttributes;