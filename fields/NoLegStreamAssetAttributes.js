var invert = require('invert-obj');

function NoLegStreamAssetAttributes (noLegStreamAssetAttributes) {
  this.message = noLegStreamAssetAttributes;
}

NoLegStreamAssetAttributes.prototype.value = function () {
  return this.message;
};

NoLegStreamAssetAttributes.Tag = '41452';

NoLegStreamAssetAttributes.Type = 'NUMINGROUP';

module.exports = NoLegStreamAssetAttributes;