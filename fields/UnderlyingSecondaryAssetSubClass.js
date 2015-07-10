var invert = require('invert-obj');

function UnderlyingSecondaryAssetSubClass (underlyingSecondaryAssetSubClass) {
  this.message = underlyingSecondaryAssetSubClass;
}

UnderlyingSecondaryAssetSubClass.prototype.value = function () {
  return this.message;
};

UnderlyingSecondaryAssetSubClass.Tag = '2082';

UnderlyingSecondaryAssetSubClass.Type = 'INT';

module.exports = UnderlyingSecondaryAssetSubClass;