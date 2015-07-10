var invert = require('invert-obj');

function LegAssetSubClass (legAssetSubClass) {
  this.message = legAssetSubClass;
}

LegAssetSubClass.prototype.value = function () {
  return this.message;
};

LegAssetSubClass.Tag = '2068';

LegAssetSubClass.Type = 'INT';

module.exports = LegAssetSubClass;