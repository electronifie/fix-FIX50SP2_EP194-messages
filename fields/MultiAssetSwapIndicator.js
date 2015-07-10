var invert = require('invert-obj');

function MultiAssetSwapIndicator (multiAssetSwapIndicator) {
  this.message = multiAssetSwapIndicator;
}

MultiAssetSwapIndicator.prototype.value = function () {
  return this.message;
};

MultiAssetSwapIndicator.Tag = '2527';

MultiAssetSwapIndicator.Type = 'BOOLEAN';

module.exports = MultiAssetSwapIndicator;