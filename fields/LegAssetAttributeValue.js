var invert = require('invert-obj');

function LegAssetAttributeValue (legAssetAttributeValue) {
  this.message = legAssetAttributeValue;
}

LegAssetAttributeValue.prototype.value = function () {
  return this.message;
};

LegAssetAttributeValue.Tag = '2310';

LegAssetAttributeValue.Type = 'STRING';

module.exports = LegAssetAttributeValue;