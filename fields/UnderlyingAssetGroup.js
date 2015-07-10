var invert = require('invert-obj');

function UnderlyingAssetGroup (underlyingAssetGroup) {
  this.message = underlyingAssetGroup;
}

UnderlyingAssetGroup.prototype.value = function () {
  return this.message;
};

UnderlyingAssetGroup.Tag = '2491';

UnderlyingAssetGroup.Type = 'INT';

module.exports = UnderlyingAssetGroup;