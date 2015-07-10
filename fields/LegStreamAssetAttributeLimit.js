var invert = require('invert-obj');

function LegStreamAssetAttributeLimit (legStreamAssetAttributeLimit) {
  this.message = legStreamAssetAttributeLimit;
}

LegStreamAssetAttributeLimit.prototype.value = function () {
  return this.message;
};

LegStreamAssetAttributeLimit.Tag = '41455';

LegStreamAssetAttributeLimit.Type = 'STRING';

module.exports = LegStreamAssetAttributeLimit;