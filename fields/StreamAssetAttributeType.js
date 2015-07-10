var invert = require('invert-obj');

function StreamAssetAttributeType (streamAssetAttributeType) {
  this.message = streamAssetAttributeType;
}

StreamAssetAttributeType.prototype.value = function () {
  return this.message;
};

StreamAssetAttributeType.Tag = '41238';

StreamAssetAttributeType.Type = 'STRING';

module.exports = StreamAssetAttributeType;