var invert = require('invert-obj');

function SecondaryAssetClass (secondaryAssetClass) {
  this.message = secondaryAssetClass;
}

SecondaryAssetClass.prototype.value = function () {
  return this.message;
};

SecondaryAssetClass.Tag = '1977';

SecondaryAssetClass.Type = 'INT';

module.exports = SecondaryAssetClass;