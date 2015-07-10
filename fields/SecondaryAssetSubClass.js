var invert = require('invert-obj');

function SecondaryAssetSubClass (secondaryAssetSubClass) {
  this.message = secondaryAssetSubClass;
}

SecondaryAssetSubClass.prototype.value = function () {
  return this.message;
};

SecondaryAssetSubClass.Tag = '1978';

SecondaryAssetSubClass.Type = 'INT';

module.exports = SecondaryAssetSubClass;