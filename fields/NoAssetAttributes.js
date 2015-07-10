var invert = require('invert-obj');

function NoAssetAttributes (noAssetAttributes) {
  this.message = noAssetAttributes;
}

NoAssetAttributes.prototype.value = function () {
  return this.message;
};

NoAssetAttributes.Tag = '2304';

NoAssetAttributes.Type = 'NUMINGROUP';

module.exports = NoAssetAttributes;