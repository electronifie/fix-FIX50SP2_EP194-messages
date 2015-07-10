var invert = require('invert-obj');

function NoStreamAssetAttributes (noStreamAssetAttributes) {
  this.message = noStreamAssetAttributes;
}

NoStreamAssetAttributes.prototype.value = function () {
  return this.message;
};


NoStreamAssetAttributes.Keys = {
  DAY: 'D',
};

NoStreamAssetAttributes.Tag = '41237';

NoStreamAssetAttributes.Type = 'NUMINGROUP';

NoStreamAssetAttributes.Values = invert(NoStreamAssetAttributes.Keys);

module.exports = NoStreamAssetAttributes;