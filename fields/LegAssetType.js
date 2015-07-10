var invert = require('invert-obj');

function LegAssetType (legAssetType) {
  this.message = legAssetType;
}

LegAssetType.prototype.value = function () {
  return this.message;
};

LegAssetType.Tag = '2069';

LegAssetType.Type = 'STRING';

module.exports = LegAssetType;