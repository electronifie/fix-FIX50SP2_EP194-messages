var invert = require('invert-obj');

function LegAssetAttributeType (legAssetAttributeType) {
  this.message = legAssetAttributeType;
}

LegAssetAttributeType.prototype.value = function () {
  return this.message;
};

LegAssetAttributeType.Tag = '2309';

LegAssetAttributeType.Type = 'STRING';

module.exports = LegAssetAttributeType;