var invert = require('invert-obj');

function UnderlyingSecondaryAssetClass (underlyingSecondaryAssetClass) {
  this.message = underlyingSecondaryAssetClass;
}

UnderlyingSecondaryAssetClass.prototype.value = function () {
  return this.message;
};

UnderlyingSecondaryAssetClass.Tag = '2081';

UnderlyingSecondaryAssetClass.Type = 'INT';

module.exports = UnderlyingSecondaryAssetClass;