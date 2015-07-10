var invert = require('invert-obj');

function UnderlyingAssetClass (underlyingAssetClass) {
  this.message = underlyingAssetClass;
}

UnderlyingAssetClass.prototype.value = function () {
  return this.message;
};

UnderlyingAssetClass.Tag = '2013';

UnderlyingAssetClass.Type = 'INT';

module.exports = UnderlyingAssetClass;