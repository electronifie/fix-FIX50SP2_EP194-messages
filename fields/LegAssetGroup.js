var invert = require('invert-obj');

function LegAssetGroup (legAssetGroup) {
  this.message = legAssetGroup;
}

LegAssetGroup.prototype.value = function () {
  return this.message;
};

LegAssetGroup.Tag = '2348';

LegAssetGroup.Type = 'INT';

module.exports = LegAssetGroup;