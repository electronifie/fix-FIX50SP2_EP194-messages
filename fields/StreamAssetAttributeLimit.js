var invert = require('invert-obj');

function StreamAssetAttributeLimit (streamAssetAttributeLimit) {
  this.message = streamAssetAttributeLimit;
}

StreamAssetAttributeLimit.prototype.value = function () {
  return this.message;
};

StreamAssetAttributeLimit.Tag = '41240';

StreamAssetAttributeLimit.Type = 'STRING';

module.exports = StreamAssetAttributeLimit;