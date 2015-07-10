var invert = require('invert-obj');

function LegSecondaryAssetSubClass (legSecondaryAssetSubClass) {
  this.message = legSecondaryAssetSubClass;
}

LegSecondaryAssetSubClass.prototype.value = function () {
  return this.message;
};

LegSecondaryAssetSubClass.Tag = '2078';

LegSecondaryAssetSubClass.Type = 'INT';

module.exports = LegSecondaryAssetSubClass;