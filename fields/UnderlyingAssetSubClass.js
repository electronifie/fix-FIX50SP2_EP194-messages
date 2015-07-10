var invert = require('invert-obj');

function UnderlyingAssetSubClass (underlyingAssetSubClass) {
  this.message = underlyingAssetSubClass;
}

UnderlyingAssetSubClass.prototype.value = function () {
  return this.message;
};

UnderlyingAssetSubClass.Tag = '2014';

UnderlyingAssetSubClass.Type = 'INT';

module.exports = UnderlyingAssetSubClass;