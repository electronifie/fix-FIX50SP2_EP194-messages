var invert = require('invert-obj');

function LegStreamAssetAttributeValue (legStreamAssetAttributeValue) {
  this.message = legStreamAssetAttributeValue;
}

LegStreamAssetAttributeValue.prototype.value = function () {
  return this.message;
};

LegStreamAssetAttributeValue.Tag = '41454';

LegStreamAssetAttributeValue.Type = 'STRING';

module.exports = LegStreamAssetAttributeValue;