var invert = require('invert-obj');

function LegStreamAssetAttributeType (legStreamAssetAttributeType) {
  this.message = legStreamAssetAttributeType;
}

LegStreamAssetAttributeType.prototype.value = function () {
  return this.message;
};

LegStreamAssetAttributeType.Tag = '41453';

LegStreamAssetAttributeType.Type = 'STRING';

module.exports = LegStreamAssetAttributeType;