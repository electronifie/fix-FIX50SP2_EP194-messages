var invert = require('invert-obj');

function NoLegAssetAttributes (noLegAssetAttributes) {
  this.message = noLegAssetAttributes;
}

NoLegAssetAttributes.prototype.value = function () {
  return this.message;
};

NoLegAssetAttributes.Tag = '2308';

NoLegAssetAttributes.Type = 'NUMINGROUP';

module.exports = NoLegAssetAttributes;