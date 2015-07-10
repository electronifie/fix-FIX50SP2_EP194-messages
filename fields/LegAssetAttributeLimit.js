var invert = require('invert-obj');

function LegAssetAttributeLimit (legAssetAttributeLimit) {
  this.message = legAssetAttributeLimit;
}

LegAssetAttributeLimit.prototype.value = function () {
  return this.message;
};

LegAssetAttributeLimit.Tag = '2311';

LegAssetAttributeLimit.Type = 'STRING';

module.exports = LegAssetAttributeLimit;