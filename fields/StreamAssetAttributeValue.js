var invert = require('invert-obj');

function StreamAssetAttributeValue (streamAssetAttributeValue) {
  this.message = streamAssetAttributeValue;
}

StreamAssetAttributeValue.prototype.value = function () {
  return this.message;
};

StreamAssetAttributeValue.Tag = '41239';

StreamAssetAttributeValue.Type = 'STRING';

module.exports = StreamAssetAttributeValue;